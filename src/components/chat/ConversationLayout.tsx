import { Box } from '@mui/material';
import type { Conversation, Message } from '../../utils/types';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import ConversationSidebar from './ConversationSidebar';

type ConversationLayoutProps = {
    conversations: Conversation[];
    activeId: string;
    onSelectConversation: (id: string) => void;
    onCreateConversation: () => void;
    messages: Message[];
    onSend: (text: string) => void;
    disabled: boolean;
};

export default function ConversationLayout({
    conversations,
    activeId,
    onSelectConversation,
    onCreateConversation,
    messages,
    onSend,
    disabled,
}: ConversationLayoutProps) {
    return (
        <Box display='flex'>
            <ConversationSidebar conversations={conversations} activeId={activeId} onSelect={onSelectConversation} onCreate={onCreateConversation} />

            <Box flex={1} display='flex' flexDirection='column'>
                <ChatWindow messages={messages} />
                <ChatInput onSend={onSend} disabled={disabled} />
            </Box>
        </Box>
    );
}
