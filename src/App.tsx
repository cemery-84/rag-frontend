import { Route, Routes } from 'react-router';
import { ThemeProvider, CssBaseline } from '@mui/material';
import RequireAuth from './components/auth/RequireAuth';
import { AppLayout } from './components/layout/AppLayout';
import { useThemeMode } from './hooks/useThemeMode';
import { Home } from './pages/Home';
import JsonChatPage from './pages/JsonChatPage';
import KnowledgeBase from './pages/KnowledgeBase';
import LoginPage from './pages/LoginPage';
import StreamChatPage from './pages/StreamChatPage';
import { darkTheme } from './theme/dark-theme';
import { lightTheme } from './theme/light-theme';

export default function App() {
    const { themeMode, toggleMode } = useThemeMode();

    return (
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <Routes>
                {/* Public Routes */}
                <Route path='/login' element={<LoginPage />} />

                {/* Protected Routes */}
                <Route element={<RequireAuth />}>
                    <Route element={<AppLayout onToggleTheme={toggleMode} />}>
                        <Route path='/*' element={<Home />} />
                        <Route path='/json' element={<JsonChatPage />} />
                        <Route path='/stream' element={<StreamChatPage />} />
                        <Route path='/knowledge-base' element={<KnowledgeBase />} />
                    </Route>
                </Route>
            </Routes>
        </ThemeProvider>
    );
}
