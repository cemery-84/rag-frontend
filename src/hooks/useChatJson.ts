import { useState } from "react";
import { sendJsonChat } from "../api/chat";
import type { Message } from "../components/MessageBubble";

export function useChatJson() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Send the user message and handle the JSON response
    const sendMessage = async (text: string) => {
        setIsLoading(true);

        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", content: text },
        ]);

        try {
            const data = await sendJsonChat(text, 5);

            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    role: "assistant",
                    content: data.answer,
                    sources: data.context_used.documents.map(
                        (doc: string, i: number) => ({
                            source: data.context_used.metadatas[i].source,
                            content: doc,
                            score: data.context_used.distances?.[i],
                        }),
                    ),
                },
            ]);
        } catch (error) {
            console.error("Error fetching chat response:", error);
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
