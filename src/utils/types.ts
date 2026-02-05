export type RetrievedChunk = {
    source: string;
    content: string;
    score?: number;
};

export type Message = {
    role: 'user' | 'assistant';
    content: string;
    sources?: RetrievedChunk[];
};

export type ChatInputProps = {
    onSend: (message: string) => void;
    disabled?: boolean;
};
