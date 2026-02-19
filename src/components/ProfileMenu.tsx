import { useState, useContext } from 'react';
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from '../api/auth';
import { AuthContext } from '../providers/AuthContext';

const ProfileItem = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

const ProfileLink = styled(MenuItem)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}));

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const user = useContext(AuthContext);

    const open = Boolean(anchorEl);

    const photoUrl = user?.photoURL;
    const displayName = user?.displayName || user?.email || '';
    const initials = displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleOpen} size='small'>
                <Avatar src={photoUrl || undefined}>{!photoUrl ? initials || <PersonIcon /> : null}</Avatar>
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <ProfileItem>
                    <Typography variant='subtitle1'>{user?.displayName || 'User'}</Typography>
                    <Typography variant='body2' color='textSecondary'>
                        {user?.email}
                    </Typography>
                </ProfileItem>
                <Divider />
                <ProfileLink onClick={logout}>Sign Out</ProfileLink>
            </Menu>
        </>
    );
}
