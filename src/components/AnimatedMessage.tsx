import { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface Props {
    text: string;
}

export default function AnimatedMessage({ text }: Props) {
    const prevTextRef = useRef('');
    const [staticPart, setStaticPart] = useState('');
    const [animatedPart, setAnimatedPart] = useState('');

    useEffect(() => {
        const prev = prevTextRef.current;
        const next = text;

        if (next.startsWith(prev)) {
            const delta = next.slice(prev.length);
            setStaticPart(prev);
            setAnimatedPart(delta);
        } else {
            setStaticPart(next);
            setAnimatedPart('');
        }

        prevTextRef.current = next;
    }, [text]);

    return (
        <Box component='span'>
            <Box component='span'>{staticPart}</Box>
            <Box
                component='span'
                sx={{
                    opacity: 0,
                    animation: 'fadeIn 0.25s forwards',
                }}
            >
                {animatedPart}
            </Box>

            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
        </Box>
    );
}
