import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { useChatStream } from "../hooks/useChatStream";

export default function StreamChatPage() {
    const { messages, sendMessage, isLoading } = useChatStream();

    return (
        <div className="app-container">
            <ChatWindow messages={messages} />
            <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
    );
}
