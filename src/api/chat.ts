import { API_BASE_URL } from "./config";

export async function sendJsonChat(message: string, n_results: number) {
    const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, n_results }),
    });

    if (!response.ok) {
        throw new Error("Failed to send message");
    }

    return response.json();
}

export function createStreamChat(message: string): EventSource {
    const url = `${API_BASE_URL}/chat/stream?message=${encodeURIComponent(message)}`;

    return new EventSource(url);
}
