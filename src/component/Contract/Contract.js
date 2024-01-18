import React, { useState } from 'react';

const ContractPage = () => {
    const [content, setContent] = useState('');

    const showCustomDialog = (message, callback) => {
        const dialogContainer = document.createElement('div');
        dialogContainer.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50';

        const dialogBox = document.createElement('div');
        dialogBox.className = 'bg-white p-6 rounded';

        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.className = 'mb-4';

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'OK';
        confirmButton.className = 'bg-blue-500 text-white px-4 py-2 rounded mr-4';
        confirmButton.addEventListener('click', () => {
            document.body.removeChild(dialogContainer);
            callback(true);
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.className = 'bg-gray-300 text-gray-700 px-4 py-2 rounded';
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(dialogContainer);
            callback(false);
        });

        dialogBox.appendChild(messageElement);
        dialogBox.appendChild(confirmButton);
        dialogBox.appendChild(cancelButton);

        dialogContainer.appendChild(dialogBox);
        document.body.appendChild(dialogContainer);
    };

    const handleButtonClick = (action) => {
        const textarea = document.getElementById('contract-textarea');
        const selection = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

        switch (action) {
            case 'Open':
                // Implement functionality to open a file or relevant action
                alert('Open functionality will be implemented here.');
                break;
            case 'Cut':
                document.execCommand('cut');
                break;
            case 'Copy':
                document.execCommand('copy');
                break;
            case 'Paste':
                document.execCommand('paste');
                break;
            case 'Undo':
                document.execCommand('undo');
                break;
            case 'Redo':
                document.execCommand('redo');
                break;
            case 'Find':
                const searchTerm = prompt('Enter search term:');
                if (searchTerm) {
                    showCustomDialog('Case sensitive?', (caseSensitive) => {
                        showCustomDialog('Start at the top?', (startAtTop) => {
                            const flags = caseSensitive ? 'g' : 'gi';
                            const regex = new RegExp(searchTerm, flags);

                            const index = startAtTop ? 0 : textarea.selectionEnd;
                            const match = content.substring(index).match(regex);

                            if (match) {
                                const matchIndex = content.indexOf(match[0], index);
                                textarea.setSelectionRange(matchIndex, matchIndex + match[0].length);
                            } else {
                                alert('No match found.');
                            }
                        });
                    });
                }
                break;
            case 'Bold':
                document.execCommand('bold', false, null);
                break;
            case 'Italic':
                document.execCommand('italic', false, null);
                break;
            case 'Underline':
                document.execCommand('underline', false, null);
                break;
            case 'Color':
                const color = prompt('Enter color:');
                if (color) {
                    document.execCommand('foreColor', false, color);
                }
                break;
            case 'Font':
                const font = prompt('Enter font name:');
                if (font) {
                    document.execCommand('fontName', false, font);
                }
                break;
            case 'FontSize':
                const fontSize = prompt('Enter font size (1-7):');
                if (fontSize && parseInt(fontSize, 10) >= 1 && parseInt(fontSize, 10) <= 7) {
                    document.execCommand('fontSize', false, fontSize);
                }
                break;
            default:
                break;
        }

        // Update the state with the modified content
        setContent(textarea.value);
    };


    return (
        <div className='bg-gray-300 w-full flex flex-col items-center h-full'>
            {/* List at the top of the gray background */}
            <ul className='flex gap-3 w-1/2'>
                <li onClick={() => handleButtonClick('Open')} className='cursor-pointer'>Open</li>
                <li onClick={() => handleButtonClick('Cut')} className='cursor-pointer'>Cut</li>
                <li onClick={() => handleButtonClick('Copy')} className='cursor-pointer'>Copy</li>
                <li onClick={() => handleButtonClick('Paste')} className='cursor-pointer'>Paste</li>
                <li onClick={() => handleButtonClick('Undo')} className='cursor-pointer'>Undo</li>
                <li onClick={() => handleButtonClick('Redo')} className='cursor-pointer'>Redo</li>
                <li onClick={() => handleButtonClick('Find')} className='cursor-pointer'>Find</li>
                <li onClick={() => handleButtonClick('Bold')} className='cursor-pointer'>Bold</li>
                <li onClick={() => handleButtonClick('Italic')} className='cursor-pointer'>Italic</li>
                <li onClick={() => handleButtonClick('Underline')} className='cursor-pointer'>Underline</li>
                <li onClick={() => handleButtonClick('Color')} className='cursor-pointer'>Color</li>
                <li onClick={() => handleButtonClick('Font')} className='cursor-pointer'>Font</li>
                <li onClick={() => handleButtonClick('FontSize')} className='btcursor-pointern'>Font Size</li>
            </ul>


            {/* White div */}
            <div className='w-1/2 bg-white h-screen overflow-hidden'>
                <textarea
                    id='contract-textarea'
                    className='text-sm p-2 w-full h-full overflow-y-auto'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ContractPage;
