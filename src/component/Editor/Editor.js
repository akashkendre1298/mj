import React, { useState } from 'react';

const Editor = () => {
    const [font, setFont] = useState('Arial');
    const [fontSize, setFontSize] = useState(16);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [textColor, setTextColor] = useState('#000000');
    const [highlightColor, setHighlightColor] = useState('#FFFF00');
    const [highlightOpacity, setHighlightOpacity] = useState(1);
    const [text, setText] = useState('');

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
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%', height: '80%', backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: "rgb(229, 229, 229)" }}>
                <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <label>Font:</label>
                        <select value={font} onChange={handleFontChange} className='border'>
                            <option value="Arial">Arial</option>
                            <option value="Arial, Helvetica, sans-serif">Helvetica</option>
                            <option value="'Times New Roman', Times, serif">Times New Roman</option>
                            <option value="Verdana, Geneva, sans-serif">Verdana</option>
                            <option value="'Courier New', Courier, monospace">Courier New</option>
                            <option value="'Lucida Console', Monaco, monospace">Lucida Console</option>
                            <option value="'Garamond', serif">Garamond</option>
                            <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino</option>
                            <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                            <option value="'Georgia', serif">Georgia</option>
                            {/* Add more fonts as needed */}
                        </select>

                        <label>Font Size:</label>
                        <input type="number" value={fontSize} onChange={handleFontSizeChange} className='border' />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <div>
                            <input type="checkbox" checked={isBold} onChange={handleBoldChange} />
                            <label className='px-3'>Bold</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={isItalic} onChange={handleItalicChange} />
                            <label className='px-3'>Italic</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={isHighlighted} onChange={handleHighlightChange} />
                            <label className='px-3'>Highlight</label>
                        </div>

                        <div>
                            <input type="color" value={textColor} onChange={handleTextColorChange} />
                            <label>Text Color</label>
                        </div>
                        <div>
                            <input type="color" value={highlightColor} onChange={handleHighlightColorChange} />
                            <label>Highlight Color</label>
                        </div>
                        <div>
                            <input type="range" min="0" max="1" step="0.1" value={highlightOpacity} onChange={handleHighlightOpacityChange} />
                            <label>Highlight Opacity</label>
                        </div>

                    </div>
                </div>

                <div style={{ flex: 1, padding: '10px' }}>
                    <textarea
                        style={{
                            fontFamily: font,
                            fontSize: `${fontSize}px`,
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',
                            backgroundColor: isHighlighted ? `${highlightColor}${Math.round(highlightOpacity * 255).toString(16)}` : 'transparent',
                            color: textColor,
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Editor;
