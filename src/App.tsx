import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import JsonChatPage from "./pages/JsonChatPage";
import StreamChatPage from "./pages/StreamChatPage";

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
            </div>
            <Routes>
                <Route path="/json" element={<JsonChatPage />} />
                <Route path="/stream" element={<StreamChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}
