import React, { useState } from 'react';
import { ChromePicker, SketchPicker, CompactPicker, TwitterPicker, SliderPicker, SwatchesPicker } from 'react-color';

const ColorPicker = ({ index }) => {
    const [rowColors, setRowColors] = useState({
        [index]: { footerBackground: '#ffffff' }, // Set initial color
    });
    const [colorMode, setColorMode] = useState(''); // Default color mode is HEX

    const handleColorChange = (id, property, value) => {
        setRowColors((prevRowColors) => ({
            ...prevRowColors,
            [id]: { ...prevRowColors[id], [property]: value },
        }));
    };

    const handleModeChange = (mode) => {
        setColorMode(mode);
    };

    return (
        <div className='z-10'>
            {/* Color Picker Input */}
            {/* <input
                type="color"
                id={`footer_bg_color_${index}`}
                name={`footer_bg_color_${index}`}
                value={rowColors[index].footerBackground}
                onChange={(e) => handleColorChange(index, 'footerBackground', e.target.value)}
            /> */}

            {/* Color Picker Popup */}
            <div>
                {/* Buttons to switch between different color selectors */}
                <button onClick={() => handleModeChange('hex')} className='pr-3'>HEX</button>
                <button onClick={() => handleModeChange('hsv')} className='pr-3'>HSV</button>
                <button onClick={() => handleModeChange('hsl')} className='pr-3'>HSL</button>
                <button onClick={() => handleModeChange('rgb')} className='pr-3'>RGB</button>
                <button onClick={() => handleModeChange('cmyk')} className='pr-3'>CMYK</button>
                <button onClick={() => handleModeChange('transparent')} className='pr-3'>Transparent</button>

                {/* Render the selected color picker */}
                {colorMode === 'hex' && <SketchPicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
                {colorMode === 'hsv' && <ChromePicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
                {colorMode === 'hsl' && <SliderPicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
                {colorMode === 'rgb' && <SwatchesPicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
                {colorMode === 'cmyk' && <CompactPicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
                {colorMode === 'transparent' && <TwitterPicker color={rowColors[index].footerBackground} onChange={(color) => handleColorChange(index, 'footerBackground', color.hex)} />}
            </div>
        </div>
    );
};

export default ColorPicker;
