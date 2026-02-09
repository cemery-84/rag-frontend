import { IconButton, Tooltip, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeSwitcher({ onToggle }: { onToggle: () => void }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Tooltip title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`} placement='bottom'>
            <IconButton onClick={onToggle} color='inherit'>
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    );
}
