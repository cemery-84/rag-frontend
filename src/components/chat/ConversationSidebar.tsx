import { Box, Button, Typography } from '@mui/material';
import type { Conversation } from '../../utils/types';

type Props = {
    conversations: Conversation[];
    activeId: string;
    onSelect: (id: string) => void;
    onCreate: () => void;
};

export default function ConversationSidebar({ conversations, activeId, onSelect, onCreate }: Props) {
    return (
        <Box width={260} borderRight='1px solid #ccc' p={2} display='flex' flexDirection='column'>
            <Typography variant='h6'>Conversations</Typography>

            <Button variant='contained' fullWidth onClick={onCreate} sx={{ mt: 2, mb: 2 }}>
                New Chat
            </Button>

            <Box flex={1} overflow='auto'>
                {conversations.map((conv) => (
                    <Box
                        key={conv.id}
                        onClick={() => onSelect(conv.id)}
                        sx={{
                            p: 1.5,
                            mb: 1,
                            borderRadius: 1,
                            cursor: 'pointer',
                            backgroundColor: conv.id === activeId ? 'action.selected' : 'transparent',
                        }}
                    >
                        {conv.title}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
