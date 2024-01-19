import React, { useRef, useState } from 'react';

const ContractPage = () => {
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [textColor, setTextColor] = useState('#000000');
    const [highlightColor, setHighlightColor] = useState('#FFFF00');
    const [highlightOpacity, setHighlightOpacity] = useState(1);
    const [text, setText] = useState('');
    const textAreaRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleOpenClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

   

    const handleCut = () => {
        const selectedText = window.getSelection().toString();
        // Perform cut operation on selectedText
    };

    const handleCopy = () => {
        const selectedText = window.getSelection().toString();
        // Perform copy operation on selectedText
    };


    const handleUndo = () => {
        document.execCommand('undo');
    };

    const handleRedo = () => {
        document.execCommand('redo');
    };

    const handleFontChange = (event) => {
        setFont(event.target.value);
    };

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    const handleBoldChange = () => {
        setIsBold(!isBold);
    };

    const handleItalicChange = () => {
        setIsItalic(!isItalic);
    };

    const handleHighlightChange = () => {
        setIsHighlighted(!isHighlighted);
    };

    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
    };

    const handleHighlightColorChange = (event) => {
        setHighlightColor(event.target.value);
    };

    const handleHighlightOpacityChange = (event) => {
        setHighlightOpacity(event.target.value);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%', height: '80%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
                        <p onClick={handleOpenClick} className='cursor-pointer'>
                            Open
                        </p>
                        <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
                            <button onClick={handleCut} className='cursor-pointer'>
                                Cut
                            </button>
                            <button onClick={handleCopy} className='cursor-pointer'>
                                Copy
                            </button>
                            <button onClick={handlePaste} className='cursor-pointer'>
                                Paste
                            </button>
                        </div>
                        <p onClick={handleUndo} className='cursor-pointer'>
                            Undo
                        </p>
                        <p onClick={handleRedo} className='cursor-pointer'>
                            Redo
                        </p>
                        <p
                            onClick={handleBoldChange}
                            style={{ fontWeight: isBold ? 'bold' : 'normal' }}
                            className='cursor-pointer'
                        >
                            Bold
                        </p>
                        <p
                            onClick={handleItalicChange}
                            style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
                            className='cursor-pointer'
                        >
                            Italic
                        </p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <select value={font} onChange={handleFontChange} className='border'>
                            <option value='Arial'>Arial</option>
                            <option value='Helvetica, sans-serif'>Helvetica</option>
                            <option value="'Times New Roman', Times, serif">Times New Roman</option>
                            {/* Add more font options as needed */}
                        </select>
                        <input type='number' value={fontSize} onChange={handleFontSizeChange} className='border' />
                    </div>
                </div>
                <div style={{ flex: 1, padding: '10px' }}>
                    <textarea
                        ref={textAreaRef}
                        style={{
                            fontFamily: font,
                            fontSize: `${fontSize}px`,
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',


                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={() => { }}
            />
        </div>
    );
};

export default ContractPage;
