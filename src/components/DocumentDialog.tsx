import { useState } from 'react';
import { API_BASE_URL } from '../api/config';

interface IProps {
    open: boolean;
    onClose: () => void;
}

export function DocumentDialog({ open, onClose }: IProps) {
    const [uploading, setUploading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    if (!open) return null;

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setUploading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`${API_BASE_URL}/ingest`, {
                method: 'POST',
                body: formData,
            });

            const json = await response.json();
            setMessage(json.message || 'File uploaded successfully!');
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Upload error:', error);
            }
            setMessage('Error uploading file. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <h2>Upload Document</h2>
                <input
                    type="file"
                    onChange={handleUpload}
                    disabled={uploading}
                />
                {uploading && <p>Uploading...</p>}
                {message && <p>{message}</p>}

                <button
                    onClick={onClose}
                    disabled={uploading}
                    className="ai-button"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
