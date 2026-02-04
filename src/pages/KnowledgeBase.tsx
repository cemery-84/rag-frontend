import { useState } from "react";
import { DocumentDialog } from "../components/DocumentDialog";

export default function KnowledgeBase() {
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    return (
        <div className="knowledge-base-container">
            <h1>Knowledge Base</h1>
            <button onClick={() => setIsUploadOpen(true)}>
                Upload Document
            </button>
            <DocumentDialog
                open={isUploadOpen}
                onClose={() => setIsUploadOpen(false)}
            />
        </div>
    );
}
