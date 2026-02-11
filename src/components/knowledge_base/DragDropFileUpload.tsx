import { useCallback, useEffect, useRef, useState } from 'react';
import { Box, CircularProgress, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface DragDropFileUploadProps {
    onFileUpload: (files: FileList) => void;
    maxFileSize: number;
}

interface PreviewProps {
    name: string;
    source: string;
    size: string;
}

export const DragDropFileUpload: React.FC<DragDropFileUploadProps> = ({ onFileUpload, maxFileSize }) => {
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imagePreviews, setImagePreviews] = useState<PreviewProps[]>([]);
    const [invalidFiles, setInvalidFiles] = useState<boolean>(false);
    const [fileSize, setFileSize] = useState<number>(0);
    const [invalidFileSize, setInvalidFileSize] = useState<boolean>(false);
    const fileSizeRef = useRef(fileSize);

    const allowedExtensions = ['pdf', 'docx', 'txt', 'csv', 'xlsx'];

    const theme = useTheme();
    const dropBorder = dragOver ? theme.palette.secondary : theme.palette.divider;
    const dropBackground = dragOver ? theme.palette.background.default : theme.palette.background.paper;

    useEffect(() => {
        fileSizeRef.current = fileSize;
    }, [fileSize]);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
        setInvalidFileSize(false);
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
    }, []);

    const validateFiles = (files: FileList): boolean => {
        const goodFiles = Array.from(files).filter((file) => {
            const extension = file.name.split('.').pop()?.toLowerCase();
            if (extension) return allowedExtensions.includes(extension);
        });
        return goodFiles.length === files.length;
    };

    const validateFileSize = (files: FileList): boolean => {
        let size = fileSizeRef.current;
        const newFiles = Array.from(files);
        newFiles.forEach((file) => {
            size += file.size;
        });
        if (size <= maxFileSize) {
            setFileSize(size);
        }
        return size <= maxFileSize;
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            handleFileChange(files);
        }
    }, []);

    const handleFileChange = (files: FileList) => {
        setLoading(true);

        // Check the resulting file size against the max file size
        if (!validateFileSize(files)) {
            setInvalidFileSize(true);
            setLoading(false);
            return;
        }

        // Check the file extensions
        if (!validateFiles(files)) {
            setInvalidFiles(true);
            setLoading(false);
            return;
        }

        setInvalidFiles(false);

        // If all validations pass, call the onFileUpload callback
        onFileUpload(files);

        // Generate image previews for valid files (optional, can be removed if not needed)
        const filePreviews = Array.from(files).map((file) => {
            const name = file.name;
            const size = formatBytes(file.size);
            let source = '';
            switch (file.type) {
                case 'application/pdf':
                    source = '../src/assets/icons8-pdf-100.png';
                    break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    source = '../src/assets/icons8-word-file-100.png';
                    break;
                case 'text/plain':
                    source = '../src/assets/icons8-txt-100.png';
                    break;
                case 'text/csv':
                    source = '../src/assets/icons8-csv-100.png';
                    break;
                case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                    source = '../src/assets/icons8-xls-100.png';
                    break;
                default:
                    source = '../src/assets/icons8-file-100.png';
            }
            return new Promise<PreviewProps>((resolve) => {
                resolve({ name, source, size });
            });
        });

        Promise.all(filePreviews).then((previews) => {
            setImagePreviews((prev) => [...prev, ...previews]);
        });

        setLoading(false);
    };

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            handleFileChange(files);
        }
    }, []);

    function formatBytes(bytes: number) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    return (
        <Box>
            <Paper
                variant='outlined'
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                    backgroundColor: dropBackground,
                    border: `2px dashed ${invalidFiles || invalidFileSize ? 'red' : dropBorder}`,
                    cursor: 'pointer',
                    padding: '20px',
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <input
                    type='file'
                    id='file-upload'
                    accept='.pdf,.docx,.txt,.csv,.xlsx'
                    multiple
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
                <label htmlFor='file-upload'>
                    <Box display='flex' flexDirection='column' alignItems='center'>
                        <IconButton color='primary' component='span' disabled={loading}>
                            <CloudUploadIcon style={{ fontSize: 60 }} />
                        </IconButton>
                        <Typography>Drag and drop files here, or click to select files</Typography>
                        <Typography sx={{ fontSize: '14px', color: theme.palette.text.secondary }}>
                            PDF, DOCX, TXT, CSV, XLSX files allowed. Max total size: {formatBytes(maxFileSize)}.
                        </Typography>
                        {invalidFiles && (
                            <Typography sx={{ color: theme.palette.error.main }}>
                                Invalid File Type(s). Only the files listed below are allowed:
                                <br />
                                Allowed types: {allowedExtensions.join(', ')}.
                            </Typography>
                        )}
                        {invalidFileSize && (
                            <Typography sx={{ color: theme.palette.error.main }}>
                                Total file size exceeds the maximum allowed size of {formatBytes(maxFileSize)}.
                            </Typography>
                        )}
                    </Box>
                </label>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
            </Paper>
            {imagePreviews.length > 0 && (
                <Stack spacing={1} mt='10px'>
                    {imagePreviews.map((preview, index) => (
                        <Paper
                            key={index}
                            sx={{ maxHeight: '50px', boxShadow: 'none', backgroundColor: theme.palette.background.default, padding: '5px' }}
                        >
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <Box component='img' src={preview.source} alt={preview.name} sx={{ maxWidth: '40px', maxHeight: '40px' }} />
                                <Stack>
                                    <Typography variant='body2'>{preview.name}</Typography>
                                    <Typography variant='caption'>{preview.size}</Typography>
                                </Stack>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            )}
        </Box>
    );
};
