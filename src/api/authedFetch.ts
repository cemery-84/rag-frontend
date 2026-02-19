import { auth } from '../firebase';

export async function authedFetch(url: string, options: RequestInit = {}) {
    const token = await auth.currentUser?.getIdToken();

    if (!token) {
        throw new Error('User is not authenticated');
    }

    const headers = {
        ...(options.headers || {}),
        Authorization: token ? `Bearer ${token}` : '',
    };

    return fetch(url, { ...options, headers });
}
