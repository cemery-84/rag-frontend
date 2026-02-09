import { Box, Card, CardContent, CardHeader, List, ListItem, Paper, Stack, Typography } from '@mui/material';

export function Home() {
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
            </Stack>
        </Box>
    );
}
