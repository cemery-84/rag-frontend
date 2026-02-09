import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeSwitcher } from '../layout/ThemeSwitcher';
import logo from '../../assets/ce-logo.png';

export function AppHeader({ onToggleTheme, onToggleNav, collapsed }: { onToggleTheme: () => void; onToggleNav: () => void; collapsed: boolean }) {
    return (
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color='inherit' aria-label='menu' onClick={onToggleNav} sx={{ mr: 2 }}>
                    {collapsed ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: 2,
                        backgroundColor: '#333333',
                        padding: '2px 6px',
                        borderRadius: '4px',
                    }}
                >
                    <Box component='img' src={logo} alt='Blue Coconut' sx={{ width: 50, height: 50 }} />
                </Box>

                <Typography
                    sx={{
                        color: '#003078',
                        flexGrow: 1,
                        fontSize: '1.75rem',
                        fontWeight: 600,
                    }}
                >
                    AI Chat - Self Learning
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <ThemeSwitcher onToggle={onToggleTheme} />
            </Toolbar>
        </AppBar>
    );
}
