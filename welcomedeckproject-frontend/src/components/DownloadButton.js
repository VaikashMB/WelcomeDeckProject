import React from 'react'
import html2canvas from 'html2canvas';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faDownload);


const DownloadButton = ({ employee }) => {

    const downloadWelcomeDeck = async () => {

        const captureContainerId = `captureContainer_${employee.emp_id}`;
        const captureContainer = document.getElementById(captureContainerId);

        try {
            const canvas = await html2canvas(captureContainer);

            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `WelcomeDeck_${employee.emp_id}.png`;

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.error('Error capturing content:', error);
        }
    };
    return (
        <div>
            <FontAwesomeIcon
                icon="download"
                className="download-icon"
                onClick={() => downloadWelcomeDeck(employee)}
            />


        </div>
    )
}

export default DownloadButton