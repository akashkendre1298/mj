import React, { useState } from "react";
import "./BatchAddPhotos.css";
import close from "../icons/close_2997911.png";
import Header from "../../Header/Header";

import Footer from "./../../Footer/Footer";

const BatchAddPhotos = () => {
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);

    setSelectedFolder(selectedFile);
  };

  const handleBrowseClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      <Header />
      {isPopupOpen && (
        <div className="Batch-AddPhotos-main-container">
          <div className="Batch-AddPhotos-header-container">
            <p className="Batch-AddPhotos-header-BulkImport">Bulk Import</p>
            <img
              src={close}
              alt="Close"
              className="BatchAddPhots-close-image"
              onClick={handleClose}
            />
          </div>

          <div className="Batch-AddPhotos-Button-container">
            <button
              className="Batch-AddPhotos-Button-Browse"
              onClick={handleBrowseClick}
            >
              Browse and choose folder
            </button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileUpload}
              webkitdirectory=""
              directory=""
            />
          </div>

          <div className="BatchAddphotos-Box-container">
            {selectedFolder && (
              <p>Selected Folder: {selectedFolder.webkitRelativePath}</p>
            )}
          </div>

          <div className="Batch-Add-Photos-para-main-container">
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
          </div>

          <div className="Batch-Addphotos-Ok-btn-container">
            <button className="Batch-Addphotos-Ok-btn">OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BatchAddPhotos;
