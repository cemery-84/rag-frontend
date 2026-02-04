import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import JsonChatPage from "./pages/JsonChatPage";
import StreamChatPage from "./pages/StreamChatPage";
import KnowledgeBase from "./pages/KnowledgeBase";

export default function App() {
    return (
        <BrowserRouter>
            <div className="nav-bar">
                <Link to="/json" className="nav-link">
                    JSON Chat
                </Link>
                <Link to="/stream" className="nav-link">
                    Stream Chat
                </Link>
                <Link to="/knowledge-base" className="nav-link">
                    Knowledge Base
                </Link>
            </div>
            <Routes>
                <Route path="/json" element={<JsonChatPage />} />
                <Route path="/stream" element={<StreamChatPage />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
            </Routes>
        </BrowserRouter>
    );
}
