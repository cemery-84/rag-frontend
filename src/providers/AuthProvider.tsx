import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
        });
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
