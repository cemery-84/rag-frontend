import { IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeSwitcher({ onToggle }: { onToggle: () => void }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <IconButton onClick={onToggle} color="inherit">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    );
}
