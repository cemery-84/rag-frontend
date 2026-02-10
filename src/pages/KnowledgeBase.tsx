import { useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DocumentDialog } from '../components/DocumentDialog';

export default function KnowledgeBase() {
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center' mb={2}>
                <Typography variant='h4'>Knowledge Base</Typography>
                <Button variant='contained' onClick={() => setIsUploadOpen(true)}>
                    Upload Document
                </Button>
            </Stack>
            <DocumentDialog open={isUploadOpen} onClose={() => setIsUploadOpen(false)} />
        </Box>
    );
}
