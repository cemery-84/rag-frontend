import React, { useState } from "react";

type ChatInputProps = {
    onSend: (message: string) => void;
    disabled?: boolean;
};

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        onSend(inputValue);
        setInputValue("");
    };

    return (
        <form className="chat-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                    disabled
                        ? "Waiting for response..."
                        : "Type your message..."
                }
                disabled={disabled}
            />
            <button
                type="submit"
                disabled={disabled || inputValue.trim() === ""}
            >
                Send
            </button>
        </form>
    );
}
