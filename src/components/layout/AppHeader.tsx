import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeSwitcher } from '../layout/ThemeSwitcher';
import logo from '../../assets/react.svg';

export function AppHeader({
    onToggleTheme,
    onToggleNav,
    collapsed,
}: {
    onToggleTheme: () => void;
    onToggleNav: () => void;
    collapsed: boolean;
}) {
    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={onToggleNav}
                    sx={{ mr: 2 }}
                >
                    {collapsed ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>

                <Box
                    component="img"
                    src={logo}
                    alt="Blue Coconut"
                    sx={{ width: 40, height: 40, marginRight: 2 }}
                />

                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Blue Coconut
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <ThemeSwitcher onToggle={onToggleTheme} />
            </Toolbar>
        </AppBar>
    );
}
