import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import type { Message } from '../../utils/types';
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
                overflowY: 'auto',
                padding: 2,
                height: '80vh',
                borderBottom: '1px solid #ccc',
            }}
        >
            {messages.map((msg, index) => (
                <MessageBubble key={index} role={msg.role} content={msg.content} sources={msg.sources} />
            ))}

            <div ref={chatEndRef} />
        </Box>
    );
}
