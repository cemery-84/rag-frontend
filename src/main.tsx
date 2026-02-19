import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import App from './App';
import { AuthProvider } from './providers/AuthProvider';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>,
);
