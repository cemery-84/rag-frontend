import { useState, useRef } from 'react';
import { API_BASE_URL } from '../api/config';
import type { Message } from '../utils/types';

export function useChatStream() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Keep a ref to the AbortController so you can close it
    const abortControllerRef = useRef<AbortController | null>(null);

    // Keep refs to the current assistant message index and content for streaming updates
    const assistantIndexRef = useRef<number>(-1);
    const assistantContentRef = useRef<string>('');

    // Ref to track if a stream is currently active to prevent multiple simultaneous streams
    const streamingRef = useRef<boolean>(false);

    // Normalize spacing AFTER the full message is assembled
    function normalizeSpacing(text: string) {
        return (
            text
                // collapse multiple spaces
                .replace(/ {2,}/g, ' ')
                // remove space before punctuation
                .replace(/ \./g, '.')
                .replace(/ ,/g, ',')
                .replace(/ !/g, '!')
                .replace(/ \?/g, '?')
                .replace(/ :/g, ':')
                .replace(/ ;/g, ';')
                // remove space before apostrophes
                .replace(/ '\b/g, "'")
                .trim()
        );
    }

    // Send the user message and handle the streaming response
    const sendMessage = async (text: string) => {
        if (streamingRef.current) return; // Prevent multiple simultaneous streams
        streamingRef.current = true;

        setIsLoading(true);

        // Add the user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: 'user', content: text },
        ]);

        // Add assistant placeholder and save its index for updates
        setMessages((prevMessages) => {
            const index = prevMessages.length;
            assistantIndexRef.current = index;
            assistantContentRef.current = ''; // Reset the assistant content
            return [...prevMessages, { role: 'assistant', content: '' }];
        });

        const controller = new AbortController();
        abortControllerRef.current = controller;

        // Detached async function to handle streaming to prevent React re-render issues
        (async () => {
            // POST the request to the streaming endpoint
            const response = await fetch(`${API_BASE_URL}/chat/stream`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text, n_results: 5 }),
                signal: controller.signal,
            });

            if (!response.ok) {
                throw new Error('Failed to start streaming');
            }

            const reader = response.body!.getReader();
            const decoder = new TextDecoder();

            let buffer = '';

            const flushToReact = () => {
                // Force React to flush updates by updating state with the current messages
                setMessages((prevMessages) => {
                    const updated = [...prevMessages];
                    updated[assistantIndexRef.current].content =
                        assistantContentRef.current;
                    return updated;
                });
            };

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });

                // Process only complete lines
                const lines = buffer.split('\n');

                // Keep the last parallel incomplete line in the buffer
                buffer = lines.pop() || '';

                for (const rawLine of lines) {
                    const line = rawLine.replace(/\r/g, ''); // Remove carriage returns

                    if (!line.startsWith('data:')) continue;

                    const data = line.replace(/^data:\s?/, ''); // Remove "data: " prefix
                    if (!data) continue;

                    // Handle the end of the stream
                    if (data === '[DONE]') {
                        assistantContentRef.current = normalizeSpacing(
                            assistantContentRef.current,
                        );
                        flushToReact(); // Ensure final update is flushed
                        setIsLoading(false);
                        streamingRef.current = false;
                        break;
                    }

                    // Skip literal "[DONE]" tokens
                    if (data.trim() === '[DONE]') continue;

                    // Try JSON metadata
                    try {
                        const parsed = JSON.parse(data);

                        if (parsed.context_used) {
                            const { documents, metadatas, distances } =
                                parsed.context_used;

                            setMessages((prevMessages) => {
                                const updated = [...prevMessages];
                                updated[assistantIndexRef.current].sources =
                                    documents.map((doc: string, i: number) => ({
                                        source: metadatas[i].source,
                                        content: doc,
                                        score: distances?.[i],
                                    }));
                                return updated;
                            });

                            continue;
                        }
                    } catch {
                        // Not JSON → treat as token
                    }

                    // Append token to the assistant content ref
                    assistantContentRef.current += data;

                    // Update UI on next animation frame to batch updates and prevent too many re-renders
                    requestAnimationFrame(flushToReact);
                }
            }

            // Final normalization
            assistantContentRef.current = normalizeSpacing(
                assistantContentRef.current,
            );
            flushToReact(); // Final flush to ensure all content is updated

            setIsLoading(false);
            streamingRef.current = false;
        })();
    };

    // Function to close the stream manually
    const closeStream = () => {
        abortControllerRef.current?.abort();
        setIsLoading(false);
    };

    // Return the messages and loading state
    return {
        messages,
        isLoading,
        sendMessage,
        closeStream,
    };
}
