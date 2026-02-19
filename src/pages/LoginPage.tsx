import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { loginWithEmail, loginWithFacebook, loginWithGoogle, loginWithMicrosoft } from '../api/auth';
import { SignInButton } from '../components/SignInButton';
import { GoogleIcon } from '../components/svg_icons/GoogleIcon';
import { FacebookIcon } from '../components/svg_icons/FacebookIcon';
import { MicrosoftIcon } from '../components/svg_icons/MicrosoftIcon';
import { AuthContext } from '../providers/AuthContext';

export default function LoginPage() {
    const user = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // If user is already logged in, redirect to home page
    if (user) {
        return <Navigate to='/home' replace />;
    }

    const handleEmailLogin = async () => {
        try {
            await loginWithEmail(email, password);
        } catch (error) {
            console.error('Email login failed:', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await loginWithFacebook();
        } catch (error) {
            console.error('Facebook login failed:', error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error('Google login failed:', error);
        }
    };

    const handleMicrosoftLogin = async () => {
        try {
            await loginWithMicrosoft();
        } catch (error) {
            console.error('Microsoft login failed:', error);
        }
    };

    return (
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' bgcolor='#f5f5f5'>
            <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
                <Typography variant='h5' gutterBottom>
                    Welcome to the AI Chat Application
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Please sign in to continue.
                </Typography>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <FormControl variant='outlined'>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <OutlinedInput id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' />
                    </FormControl>

                    <FormControl variant='outlined'>
                        <InputLabel htmlFor='password'>Password</InputLabel>
                        <OutlinedInput
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label={showPassword ? 'hide the password' : 'display the password'}
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        edge='end'
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Password'
                        />
                    </FormControl>

                    <Button variant='contained' color='primary' onClick={handleEmailLogin}>
                        Sign In
                    </Button>
                </Stack>

                <Divider sx={{ my: 2 }}>Or</Divider>

                <Stack spacing={2} sx={{ mt: 3 }}>
                    <SignInButton icon={<FacebookIcon />} label='Sign in with Facebook' onClick={handleFacebookLogin} disabled={true} />
                    <SignInButton icon={<GoogleIcon />} label='Sign in with Google' onClick={handleGoogleLogin} />
                    <SignInButton icon={<MicrosoftIcon />} label='Sign in with Microsoft' onClick={handleMicrosoftLogin} disabled={true} />
                </Stack>
            </Paper>
        </Box>
    );
}
