import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import { AppHeader } from './AppHeader';
import { SideNav } from './SideNav';

export function AppLayout({
    children,
    onToggleTheme,
}: {
    children: React.ReactNode;
    onToggleTheme: () => void;
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppHeader
                onToggleTheme={onToggleTheme}
                onToggleNav={() => setCollapsed((prev) => !prev)}
                collapsed={collapsed}
            />

            <SideNav collapsed={collapsed} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: 'margin-left 0.25s ease',
                    ml: collapsed ? '64px' : '240px',
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
