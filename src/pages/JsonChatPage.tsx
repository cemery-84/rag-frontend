import { Box } from '@mui/material';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import { useChatJson } from '../hooks/useChatJson';

export default function JsonChatPage() {
    const { messages, sendMessage, isLoading } = useChatJson();

    return (
        <Box display='flex' flexDirection='column'>
            <ChatWindow messages={messages} />
            <ChatInput onSend={sendMessage} disabled={isLoading} />
        </Box>
    );
}
