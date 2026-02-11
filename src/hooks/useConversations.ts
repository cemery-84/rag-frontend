import { useState } from 'react';
import type { Conversation, Message } from '../utils/types';

export function useConversations() {
    const [conversations, setConversations] = useState<Conversation[]>(() => {
        const id = crypto.randomUUID();
        return [
            {
                id,
                title: 'New Chat',
                messages: [],
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },
        ];
    });

    const [activeId, setActiveId] = useState<string>(() => conversations[0].id);

    const active = conversations.find((conv) => conv.id === activeId) ?? conversations[0];

    const updateActiveMessages = (updater: (prev: Message[]) => Message[]) => {
        setConversations((prev) =>
            prev.map((conv) => (conv.id === activeId ? { ...conv, messages: updater(conv.messages), updatedAt: Date.now() } : conv)),
        );
    };

    const createConversation = () => {
        const id = crypto.randomUUID();
        const newConv: Conversation = {
            id,
            title: 'New Chat',
            messages: [],
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        setConversations((prev) => [...prev, newConv]);
        setActiveId(id);
    };

    return {
        conversations,
        active,
        activeId,
        setActiveId,
        updateActiveMessages,
        createConversation,
    };
}
