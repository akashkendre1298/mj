import React, { useState } from "react";
import "./AdjustContrastContent.css"; // Update the CSS file name
import PropTypes from "prop-types";

const AdjustContrastContent = ({ imageUrl }) => {
  const [contrast, setContrast] = useState(100);

  const handleContrastChange = (event) => {
    const newContrast = event.target.value;
    setContrast(newContrast);
  };

  return (
    <div className="adjust-contrast-container">
      <div
        className="image-container"
        style={{ filter: `contrast(${contrast}%)` }}
      >
        <img src={imageUrl} alt="Preview" className="preview-image" />
      </div>
      <div className="contrast-control">
        <label htmlFor="contrastRange">Adjust Contrast</label>
        <input
          type="range"
          id="contrastRange"
          min="0"
          max="200"
          value={contrast}
          onChange={handleContrastChange}
        />
      </div>
    </div>
  );
};

AdjustContrastContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AdjustContrastContent;
