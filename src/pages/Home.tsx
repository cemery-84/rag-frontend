import { Box, Card, CardContent, CardHeader, Chip, List, ListItem, Paper, Stack, Typography, useTheme } from '@mui/material';

export function Home() {
    const theme = useTheme();
    const mode = theme.palette.mode === 'light' ? 'Light Theme' : 'Dark Theme';

    return (
        <Box>
            <Stack direction='column' justifyContent='space-between' alignItems='center' mb={4}>
                <Typography variant='h4' gutterBottom>
                    Welcome to the AI Chat Application
                </Typography>
                <Box component={Paper} elevation={3} sx={{ p: 4, mx: 4, mt: 4, width: '100%' }}>
                    <Typography variant='body1'>
                        This application was developed as a learning project to explore the integration of AI technologies in web applications. It
                        allows users to interact with an AI chatbot, providing a conversational experience. The application is built using modern web
                        technologies and demonstrates the capabilities of AI in enhancing user interactions.
                    </Typography>
                </Box>
                <Box component={Paper} elevation={3} sx={{ p: 4, mx: 4, mt: 4, width: '100%' }}>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        Technologies Used:
                    </Typography>
                    <Stack direction='row' justifyContent='left' alignItems='left' mt={4} spacing={2}>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Frontend UI' />
                            <CardContent>
                                <List>
                                    <ListItem>React</ListItem>
                                    <ListItem>Material-UI</ListItem>
                                    <ListItem>TypeScript</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Backend AI' />
                            <CardContent>
                                <List>
                                    <ListItem>Python</ListItem>
                                    <ListItem>Ollama LLM</ListItem>
                                    <ListItem>Chroma Vector DB</ListItem>
                                    <ListItem>FastAPI</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
                <Box component={Paper} elevation={3} sx={{ p: 4, mx: 4, mt: 4, width: '100%' }}>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        Current Features:
                    </Typography>
                    <Stack direction='row' justifyContent='left' alignItems='left' mt={4} spacing={2}>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Chat Interface' />
                            <CardContent>
                                <List>
                                    <ListItem>JSON responses</ListItem>
                                    <ListItem>Streaming responses</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Knowledge Base Integration' />
                            <CardContent>
                                <List>
                                    <ListItem>Uploading of documents</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
                <Box component={Paper} elevation={3} sx={{ p: 4, mx: 4, mt: 4, width: '100%' }}>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        Color Scheme: ({mode})
                    </Typography>
                    <Stack direction='row' justifyContent='left' alignItems='left' mt={4} spacing={2}>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Primary Colors' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Main:
                                        <Chip
                                            label={theme.palette.primary.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Dark:
                                        <Chip
                                            label={theme.palette.primary.dark}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.primary.dark,
                                                color: theme.palette.primary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Light:
                                        <Chip
                                            label={theme.palette.primary.light}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.primary.light,
                                                color: theme.palette.primary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Secondary Colors' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Main:
                                        <Chip
                                            label={theme.palette.secondary.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.secondary.main,
                                                color: theme.palette.secondary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Dark:
                                        <Chip
                                            label={theme.palette.secondary.dark}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.secondary.dark,
                                                color: theme.palette.secondary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Light:
                                        <Chip
                                            label={theme.palette.secondary.light}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.secondary.light,
                                                color: theme.palette.secondary.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Alert Colors' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Info:
                                        <Chip
                                            label={theme.palette.info.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.info.main,
                                                color: theme.palette.info.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Success:
                                        <Chip
                                            label={theme.palette.success.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.success.main,
                                                color: theme.palette.success.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Warning:
                                        <Chip
                                            label={theme.palette.warning.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.warning.main,
                                                color: theme.palette.warning.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Error:
                                        <Chip
                                            label={theme.palette.error.main}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.error.main,
                                                color: theme.palette.error.contrastText,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Stack>
                    <Stack direction='row' justifyContent='left' alignItems='left' mt={4} spacing={2}>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Background Colors' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Background Default:
                                        <Chip
                                            label={theme.palette.background.default}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.background.default,
                                                color: theme.palette.getContrastText(theme.palette.background.default),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Background Paper:
                                        <Chip
                                            label={theme.palette.background.paper}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.background.paper,
                                                color: theme.palette.getContrastText(theme.palette.background.paper),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Text Colors' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Text Primary:
                                        <Chip
                                            label={theme.palette.text.primary}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.text.primary,
                                                color: theme.palette.getContrastText(theme.palette.text.primary),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Text Secondary:
                                        <Chip
                                            label={theme.palette.text.secondary}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.text.secondary,
                                                color: theme.palette.getContrastText(theme.palette.text.secondary),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                        <Card variant='outlined' sx={{ p: 2 }}>
                            <CardHeader title='Accents' />
                            <CardContent>
                                <List>
                                    <ListItem>
                                        Accent:
                                        <Chip
                                            label={theme.palette.accent ? theme.palette.accent.main : 'N/A'}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.accent ? theme.palette.accent.main : theme.palette.background.default,
                                                color: theme.palette.getContrastText(
                                                    theme.palette.accent ? theme.palette.accent.main : theme.palette.background.default,
                                                ),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        Divider/Border:
                                        <Chip
                                            label={theme.palette.divider}
                                            sx={{
                                                ml: 4,
                                                bgcolor: theme.palette.divider,
                                                color: theme.palette.getContrastText(theme.palette.divider),
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
