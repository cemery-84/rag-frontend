import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { useChatJson } from "../hooks/useChatJson";

export default function JsonChatPage() {
    const { messages, sendMessage, isLoading } = useChatJson();

    return (
        <div className="app-container">
            <ChatWindow messages={messages} />
            <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
    );
}
