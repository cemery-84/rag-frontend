import React, { useState } from "react";
import type { RetrievedChunk } from "./MessageBubble";

type RetrievalPanelProps = {
    chunks: RetrievedChunk[];
};

export default function RetrievalPanel({ chunks }: RetrievalPanelProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="retrieval-panel">
            <button onClick={() => setIsOpen(!isOpen)} className="expander">
                {isOpen ? "▲ Hide Sources" : "▼ Show Sources"}
            </button>

            {isOpen && (
                <div className="retrieved-chunks">
                    {chunks.length === 0 ? (
                        <p>No sources retrieved.</p>
                    ) : (
                        chunks.map((chunk, index) => (
                            <div key={index} className="chunk">
                                <strong>Source:</strong> {chunk.source}
                                {chunk.score !== undefined && (
                                    <span className="chunk-score">
                                        (score: {chunk.score.toFixed(3)})
                                    </span>
                                )}
                                <div className="chunk-content">
                                    {chunk.content}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
