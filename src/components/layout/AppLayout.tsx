import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { AppHeader } from './AppHeader';
import { SideNav } from './SideNav';

export function AppLayout({ onToggleTheme }: { onToggleTheme: () => void }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppHeader onToggleTheme={onToggleTheme} onToggleNav={() => setCollapsed((prev) => !prev)} collapsed={collapsed} />

            <SideNav collapsed={collapsed} />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: 'margin-left 0.25s ease',
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
