import React, { useState } from "react";
import "./RotateClockwiseContent.css"; // Update the CSS file name
import PropTypes from "prop-types";

const RotateClockwiseContent = ({ imageUrl }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleRotateClockwise = () => {
    const newRotationAngle = (rotationAngle + 90) % 360;
    setRotationAngle(newRotationAngle);
  };

  return (
    <>
      <div className="rotate-clockwise-container">
        <div
          className="image-container-rotate-clockwise-eee-rrrr"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          <img src={imageUrl} alt="Preview" className="preview-image-rotate" />
        </div>
      </div>
      <div className="rotate-clockwise-control">
        <button onClick={handleRotateClockwise} className="rotate-clockwise-control-btn-rreeett">Rotate Clockwise</button>
      </div>
    </>
  );
};

RotateClockwiseContent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default RotateClockwiseContent;
