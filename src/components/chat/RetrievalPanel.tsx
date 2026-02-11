import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { RetrievedChunk } from '../../utils/types';

interface IProps {
    chunks: RetrievedChunk[];
}

export default function RetrievalPanel({ chunks }: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordion expanded={isOpen} onChange={() => setIsOpen(!isOpen)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='subtitle2'>Sources</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {chunks.length === 0 ? (
                    <Typography>No sources retrieved.</Typography>
                ) : (
                    chunks.map((chunk, index) => (
                        <Box key={index} style={{ marginBottom: '1em' }}>
                            <Typography variant='body2'>
                                <strong>Source:</strong> {chunk.source}
                            </Typography>
                            {chunk.score !== undefined && (
                                <Typography variant='caption' color='textSecondary'>
                                    (score: {chunk.score.toFixed(3)})
                                </Typography>
                            )}
                            <Typography variant='body2' sx={{ mt: 1 }}>
                                {chunk.content}
                            </Typography>
                        </Box>
                    ))
                )}
            </AccordionDetails>
        </Accordion>
    );
}
