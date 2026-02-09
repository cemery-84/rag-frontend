import type { SvgIconComponent } from '@mui/icons-material';

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

export type NavItem = {
    label: string;
    path?: string;
    icon: SvgIconComponent;
    children?: NavItem[];
};
