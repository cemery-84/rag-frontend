import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Box, IconButton, TextField } from '@mui/material';
import type { ChatInputProps } from '../utils/types';

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        onSend(inputValue);
        setInputValue('');
    };

    // Handle Enter key press to send message
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // stop newline
            if (inputValue.trim() !== '') {
                handleSend();
            }
        }
    };

    return (
        <Box
            sx={{
                p: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: '10vh',
            }}
        >
            <TextField
                fullWidth
                multiline
                variant='outlined'
                placeholder={disabled ? 'Waiting for response...' : 'Type your message...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                sx={{
                    height: '100%',
                    '& .MuiInputBase-root': {
                        height: '100%',
                        alignItems: 'stretch',
                    },
                    '& textarea': {
                        height: '100% !important',
                        overflow: 'auto',
                    },
                }}
            />
            <IconButton color='primary' onClick={handleSend} disabled={disabled || inputValue.trim() === ''} sx={{ ml: 2 }}>
                <SendIcon />
            </IconButton>
        </Box>
    );
}
