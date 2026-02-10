import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { API_BASE_URL } from '../api/config';
import { DragDropFileUpload } from './DragDropFileUpload';
interface IProps {
    open: boolean;
    onClose: () => void;
}

interface IDocumentDialogData {
    files?: FileList | null;
}

interface IFormError {
    fileError: boolean;
}

export function DocumentDialog({ open, onClose }: IProps) {
    const [formData, setFormData] = useState<IDocumentDialogData>({ files: null });
    const [formErrors, setFormErrors] = useState<IFormError>({ fileError: false });

    const maxFileSize = 1024 * 1024 * 15; // 15 MB

    const handleFileUpload = (files: FileList) => {
        setFormErrors({ ...formErrors, fileError: false });

        // Ensure files previously uploaded are not lost when new files are added
        setFormData((prevState) => {
            const newFiles = Array.from(files);
            const existingFiles = prevState.files ? Array.from(prevState.files) : [];
            const updatedFiles = [...existingFiles, ...newFiles];

            const dataTransfer = new DataTransfer();
            updatedFiles.forEach((file) => dataTransfer.items.add(file));
            return { ...prevState, files: dataTransfer.files };
        });
    };

    const validateForm = (): boolean => {
        let isValid = true;
        if (!formData.files || formData.files.length === 0) {
            setFormErrors({ ...formErrors, fileError: true });
            isValid = false;
        }
        return isValid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        // Implement the actual upload logic here, e.g., using fetch or axios to send formData.files to the backend
        const payload = new FormData();
        if (formData.files && formData.files.length > 0) {
            for (let i = 0; i < formData.files.length; i++) {
                payload.append('file', formData.files[i]);
            }
        }

        // Submit the formdata to the backend
        try {
            const response = await fetch(`${API_BASE_URL}/ingest`, {
                method: 'POST',
                body: payload,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const json = await response.json();
            console.log('Upload response:', json);
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Upload error:', error);
            }
        } finally {
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Upload Document</DialogTitle>
            <DialogContent>
                <Box component='form' noValidate>
                    <DragDropFileUpload onFileUpload={handleFileUpload} maxFileSize={maxFileSize} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant='contained' color='secondary'>
                    Close
                </Button>
                <Button onClick={handleSubmit} variant='contained' color='primary'>
                    Upload
                </Button>
            </DialogActions>
        </Dialog>
    );
}
