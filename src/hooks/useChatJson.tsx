import { useState } from 'react';
import { sendJsonChat } from '../api/chat';
import ThinkingIndicator from '../components/ThinkingIndicator';
import type { Message } from '../utils/types';

export function useChatJson(messages: Message[], updateMessages: (updater: (prev: Message[]) => Message[]) => void) {
    const [isLoading, setIsLoading] = useState(false);

    // Send the user message and handle the JSON response
    const sendMessage = async (text: string) => {
        setIsLoading(true);

        // Add user message
        updateMessages((prevMessages) => [...prevMessages, { role: 'user', content: text }]);

        // Add assistant "thinking" indicator
        const placeholderIndex = messages.length + 1;
        updateMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: <ThinkingIndicator /> }]);

        try {
            const data = await sendJsonChat(text, 5);

            updateMessages((prevMessages) => {
                const updated = [...prevMessages];

                updated[placeholderIndex] = {
                    role: 'assistant',
                    content: data.answer,
                    sources: data.context_used.documents.map((doc: string, i: number) => ({
                        source: data.context_used.metadatas[i].source,
                        content: doc,
                        score: data.context_used.distances?.[i],
                    })),
                };
                return updated;
            });
        } catch (error) {
            console.error('Error fetching chat response:', error);
        }

        setIsLoading(false);
    };

    // Return the messages and loading state
    return {
        messages,
        isLoading,
        sendMessage,
    };
}
