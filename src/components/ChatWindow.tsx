import React, { useEffect, useRef } from "react";
import MessageBubble, { type Message } from "./MessageBubble";

interface ChatWindowProps {
    messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <MessageBubble
                    key={index}
                    role={msg.role}
                    content={msg.content}
                />
            ))}

            <div ref={chatEndRef} />
        </div>
    );
}
