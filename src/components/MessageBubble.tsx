import { Paper, Typography } from '@mui/material';
import type { Message } from '../utils/types';
import RetrievalPanel from './RetrievalPanel';

type MessageBubbleProps = Message;

export default function MessageBubble({ role, content, sources }: MessageBubbleProps) {
    const isUser = role === 'user';

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                mb: isUser ? 2 : 4,
                maxWidth: '80%',
                justifySelf: isUser ? 'flex-end' : 'flex-start',
                backgroundColor: isUser ? 'primary.main' : 'grey.300',
                color: isUser ? 'primary.contrastText' : 'text.primary',
            }}
        >
            <Typography variant='body1' sx={{ mb: 2 }}>
                {content}
            </Typography>
            {role === 'assistant' && sources && sources.length > 0 && <RetrievalPanel chunks={sources} />}
        </Paper>
    );
}
