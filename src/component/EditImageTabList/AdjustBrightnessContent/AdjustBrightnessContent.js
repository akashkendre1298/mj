import React, { useState } from "react";
import "./AdjustBrightnessContent.css"; // You may need to create a CSS file for styling

const AdjustBrightnessContent = ({ imageUrl }) => {
  const [brightness, setBrightness] = useState(100);

  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
  };

  return (
    <div className="adjust-brightness-container">
      <div
        className="image-container-adjust-brightness"
        style={{ filter: `brightness(${brightness}%)` }}
      >
        <img
          src={imageUrl}
          alt="Preview"
          className="preview-image-brightness"
        />
      </div>
      <div className="brightness-control">
        <label htmlFor="brightnessRange">Adjust Brightness</label>
        <input
          type="range"
          id="brightnessRange"
          min="0"
          max="200"
          value={brightness}
          onChange={handleBrightnessChange}
        />
      </div>
    </div>
  );
};

export default AdjustBrightnessContent;
