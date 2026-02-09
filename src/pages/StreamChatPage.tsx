import { Box } from '@mui/material';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import { useChatStream } from '../hooks/useChatStream';

export default function StreamChatPage() {
    const { messages, sendMessage, isLoading } = useChatStream();

    return (
        <Box display='flex' flexDirection='column'>
            <ChatWindow messages={messages} />
            <ChatInput onSend={sendMessage} disabled={isLoading} />
        </Box>
    );
}
