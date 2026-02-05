import { Paper, Typography } from '@mui/material';
import type { Message } from '../utils/types';
import RetrievalPanel from './RetrievalPanel';

type MessageBubbleProps = Message;

export default function MessageBubble({
    role,
    content,
    sources,
}: MessageBubbleProps) {
    const isUser = role === 'user';

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                mb: 1,
                maxWidth: '80%',
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                backgroundColor: isUser ? 'primary.main' : 'grey.300',
                color: isUser ? 'primary.contrastText' : 'text.primary',
            }}
        >
            <Typography variant="body1">{content}</Typography>
            {role === 'assistant' && sources && sources.length > 0 && (
                <RetrievalPanel chunks={sources} />
            )}
        </Paper>
    );
}
