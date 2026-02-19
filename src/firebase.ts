import { initializeApp } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDnhJHHncRpQJr6PGyDDl8RpPZh1aZAG8E',
    authDomain: 'cemery-ai-chat-auth.firebaseapp.com',
    projectId: 'cemery-ai-chat-auth',
    storageBucket: 'cemery-ai-chat-auth.firebasestorage.app',
    messagingSenderId: '426873522557',
    appId: '1:426873522557:web:78ec1aaf362b4f66a7e414',
    measurementId: 'G-XDL99NHQJK',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);
