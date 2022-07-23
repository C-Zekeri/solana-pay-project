import React from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({hash, filename, cta}) => {
    const file = useIPFS(hash, filename);

    return (
        <div>
            {file ? (
                <div className="download-component">
                    <a href={file} className="download-button" download={filename}>{cta}</a>
                </div>
            ) : (
                <p>Downloading file...</p>
            )}
        </div>
    )
}

export default IPFSDownload;