import { useState, useRef } from "react";
import { createStreamChat } from "../api/chat";
import type { Message } from "../components/MessageBubble";

export function useChatStream() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Keep a ref to the EventSource so you can close it
    const eventSourceRef = useRef<EventSource | null>(null);

    // Send the user message and handle the streaming response
    const sendMessage = async (text: string) => {
        setIsLoading(true);

        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", content: text },
        ]);

        // Create a placeholder assistant message
        const assistantIndex = messages.length + 1;
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", content: "" },
        ]);

        // Open the SSE stream
        const es = createStreamChat(text);
        eventSourceRef.current = es;

        es.onmessage = (event) => {
            if (event.data === "[DONE]") {
                es.close();
                setIsLoading(false);
                return;
            }

            // Append streamed token
            const token = event.data;

            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[assistantIndex].content += token;
                return updatedMessages;
            });
        };

        es.onerror = (error) => {
            console.error("EventSource failed:", error);
            es.close();
            setIsLoading(false);
        };
    };

    // Function to close the stream manually
    const closeStream = () => {
        eventSourceRef.current?.close();
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
