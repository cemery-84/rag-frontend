import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import type { Message } from '../utils/types';
import MessageBubble from './MessageBubble';

interface IProps {
    messages: Message[];
}

export default function ChatWindow({ messages }: IProps) {
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                padding: 2,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
            }}
        >
            {messages.map((msg, index) => (
                <MessageBubble
                    key={index}
                    role={msg.role}
                    content={msg.content}
                    sources={msg.sources}
                />
            ))}

            <div ref={chatEndRef} />
        </Box>
    );
}
