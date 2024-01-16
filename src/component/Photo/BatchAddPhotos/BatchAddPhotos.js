import React, { useState } from "react";

import "./BatchAddPhotos.css";
import xButtonIcon from "../icons/close_2997911.png";

const BatchAddPhotos = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the file upload logic here
    console.log("Selected file:", selectedFile);
  };

  const handleBrowseClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      {isPopupOpen && (
        <div className="BA-container">
          <div className="BA-header">
            <span className="BA-title">Bulk Import</span>
            <img
              className="close-img"
              src={xButtonIcon}
              alt="Close"
              onClick={handleClose}
            />
          </div>
          <div className="BA-content">
            <button id="BAButton" onClick={handleBrowseClick}>
              Browse and choose folder
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </div>
          <div className="BA-box">
            <input id="BA-box" />
          </div>
          <div className="BA-Options">
            <label htmlFor="agree" id="BAlabel">
              Batch Add Photos Options
            </label>
            <br />
            <label htmlFor="agree" id="BAlabel">
              Do you want to leave the cover photo slot blank so you may add to
              it manually?
            </label>
            <input type="checkbox" name="agree" />
            <br />
            <label htmlFor="agree">
              Do you want to leave an open slot next to each photo?
            </label>
            <br />
            <label htmlFor="agree">
              This is useful if you plan on loading infrared photos side-by-side
              with normal photos.
            </label>
            <input type="checkbox" name="agree" />
            <br />
            <label htmlFor="agree">
              Extra blanks left will not affect how the report prints.
            </label>

            <br />
            {/* Additional options... */}
          </div>
          <div className="BA-Options">{/* Your options */}</div>
          <div className="OK-content">
            <button id="OKButton">OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BatchAddPhotos;
