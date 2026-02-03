import React from "react";
import RetrievalPanel from "./RetrievalPanel";

export type RetrievedChunk = {
    source: string;
    content: string;
    score?: number;
};

export type Message = {
    role: "user" | "assistant";
    content: string;
    sources?: RetrievedChunk[];
};

type MessageBubbleProps = Message;

export default function MessageBubble({
    role,
    content,
    sources,
}: MessageBubbleProps) {
    const isUser = role === "user";

    return (
        <div
            className={`message-bubble ${isUser ? "user-bubble" : "bot-bubble"}`}
        >
            <div className="message-content">{content}</div>
            {role === "assistant" && sources && sources.length > 0 && (
                <RetrievalPanel chunks={sources} />
            )}
        </div>
    );
}
