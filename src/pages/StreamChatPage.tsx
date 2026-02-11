import ConversationLayout from '../components/chat/ConversationLayout';
import { useChatStream } from '../hooks/useChatStream';
import { useConversations } from '../hooks/useConversations';

export default function StreamChatPage() {
    const { conversations, active, activeId, setActiveId, createConversation, updateActiveMessages } = useConversations();

    const { sendMessage, isLoading } = useChatStream(active?.messages ?? [], updateActiveMessages);

    return (
        <ConversationLayout
            conversations={conversations}
            activeId={activeId}
            onSelectConversation={setActiveId}
            onCreateConversation={createConversation}
            messages={active?.messages ?? []}
            onSend={sendMessage}
            disabled={isLoading}
        />
    );
}
