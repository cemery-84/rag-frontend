import { Box } from '@mui/material';

export default function ThinkingIndicator() {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                gap: '4px',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <Box
                sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'currentColor',
                    animation: 'dotPulse 1.4s infinite ease-in-out',
                    animationDelay: '0s',
                }}
            />
            <Box
                sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'currentColor',
                    animation: 'dotPulse 1.4s infinite ease-in-out',
                    animationDelay: '0.2s',
                }}
            />
            <Box
                sx={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'currentColor',
                    animation: 'dotPulse 1.4s infinite ease-in-out',
                    animationDelay: '0.4s',
                }}
            />
            <style>
                {`
                    @keyframes dotPulse {
                        0% { opacity: 0.2; transform: translateY(0); }
                        20% { opacity: 1; transform: translateY(-2px); }
                        40% { opacity: 0.2; transform: translateY(0); }
                        100% { opacity: 0.2; transform: translateY(0); }
                    }
                `}
            </style>
        </Box>
    );
}
