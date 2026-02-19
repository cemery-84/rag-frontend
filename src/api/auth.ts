import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider,
    OAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

// Email/Password login
export function loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Email/password signup
export function signupWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Facebook login
export async function loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
}

// Google login
export function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

// Microsoft login
export function loginWithMicrosoft() {
    const provider = new OAuthProvider('microsoft.com');
    return signInWithPopup(auth, provider);
}

// Logout
export function logout() {
    return signOut(auth);
}
