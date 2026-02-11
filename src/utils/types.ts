import type { SvgIconComponent } from '@mui/icons-material';
import type React from 'react';

export type RetrievedChunk = {
    source: string;
    content: string;
    score?: number;
};

export type Message = {
    role: 'user' | 'assistant';
    content: string | React.ReactNode; // Allow content to be a string or a React node (for thinking indicator)
    sources?: RetrievedChunk[];
    isLoading?: boolean; // Add isLoading to indicate if the assistant is still "thinking"
};

export type ChatInputProps = {
    onSend: (message: string) => void;
    disabled?: boolean;
};

export type Conversation = {
    id: string;
    title: string;
    messages: Message[];
    createdAt: number;
    updatedAt: number;
};

export type NavItem = {
    label: string;
    path?: string;
    icon: SvgIconComponent;
    children?: NavItem[];
};
