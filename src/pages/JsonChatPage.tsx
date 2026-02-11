import ConversationLayout from '../components/chat/ConversationLayout';
import { useChatJson } from '../hooks/useChatJson';
import { useConversations } from '../hooks/useConversations';

export default function JsonChatPage() {
    const { conversations, active, activeId, setActiveId, createConversation, updateActiveMessages } = useConversations();

    const { sendMessage, isLoading } = useChatJson(active?.messages ?? [], updateActiveMessages);

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
