import { Button, Box } from '@mui/material';

export function SignInButton({
    icon,
    label,
    onClick,
    disabled = false,
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}) {
    return (
        <Button
            variant='signIn' // your custom variant from the theme
            onClick={onClick}
            fullWidth
            disabled={disabled}
            disableElevation
            sx={{ position: 'relative' }}
        >
            {/* State layer */}
            <Box className='gsi-material-button-state' />

            {/* Content wrapper */}
            <Box className='gsi-material-button-content-wrapper'>
                <Box className='gsi-material-button-icon'>{icon}</Box>
                <Box className='gsi-material-button-contents'>{label}</Box>
            </Box>
        </Button>
    );
}
