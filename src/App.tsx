import { Route, Routes } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppLayout } from './components/layout/AppLayout';
import { useThemeMode } from './hooks/useThemeMode';
import { Home } from './pages/Home';
import JsonChatPage from './pages/JsonChatPage';
import StreamChatPage from './pages/StreamChatPage';
import KnowledgeBase from './pages/KnowledgeBase';
import { darkTheme } from './theme/dark-theme';
import { lightTheme } from './theme/light-theme';

export default function App() {
    const { themeMode, toggleMode } = useThemeMode();

    return (
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <AppLayout onToggleTheme={toggleMode}>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/json" element={<JsonChatPage />} />
                    <Route path="/stream" element={<StreamChatPage />} />
                    <Route path="/knowledge-base" element={<KnowledgeBase />} />
                </Routes>
            </AppLayout>
        </ThemeProvider>
    );
}
