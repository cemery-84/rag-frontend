import { useState, useEffect } from 'react';

export function useThemeMode() {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
        (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light',
    );

    const toggleMode = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        localStorage.setItem('themeMode', themeMode);
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);

    return { themeMode, toggleMode };
}
