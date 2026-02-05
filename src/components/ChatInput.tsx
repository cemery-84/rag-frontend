import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { IconButton, Paper, TextField } from '@mui/material';
import type { ChatInputProps } from '../utils/types';

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        onSend(inputValue);
        setInputValue('');
    };

    return (
        <Paper
            sx={{
                p: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
        >
            <TextField
                fullWidth
                multiline
                variant="outlined"
                placeholder={
                    disabled
                        ? 'Waiting for response...'
                        : 'Type your message...'
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={disabled}
            />
            <IconButton
                color="primary"
                onClick={handleSend}
                disabled={disabled || inputValue.trim() === ''}
                sx={{ ml: 2 }}
            >
                <SendIcon />
            </IconButton>
        </Paper>
    );
}
