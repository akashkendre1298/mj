import React, { useState } from "react";
import img7 from "./icons/notes.png";

import close from "./icons/close_2997911.png";
import "./Caption.css";
import Buttons from "./Buttons";

const Caption = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [captionValue, setCaptionValue] = useState("");

  const handlePopupOpen = () => {
    if (!isPopupOpen) {
      // Only reset captionValue if the popup is not already open
      setCaptionValue("");
    }
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveChanges = () => {
    // Save logic here (you can send the data to the server or perform any other action)
    setIsPopupOpen(false);
  };

  const handleDiscardChanges = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    setCaptionValue(e.target.value);
  };

  return (
    <div className="Caption-main-container">
      <div className="Caption-main-label-name">
        <label>Caption</label>
        <div className="caption-main-input-field">
          <input
            className="Caption-main-input-filed"
            value={captionValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="caption-image-edit-caption-container">
        <img
          src={img7}
          alt=""
          className="Caption-image-toopen-popupbox"
          onClick={handlePopupOpen}
        />

        {isPopupOpen && (
          <div className="Caption-main-popup-container">
            <div className="caption-popup-caption-editor-container">
              <label className="caption-popup-caption-editor">
                Caption Editor
              </label>
              <div className="caption-popup-close-image-contaier">
                <img
                  src={close}
                  className="caption-popup-close-image"
                  onClick={handleClosePopup}
                />
              </div>
            </div>

            <br />

            <input
              className="caption-popupbox-input-filed"
              value={captionValue}
              onChange={handleInputChange}
            />
            <br />
            <div className="caption-popupbox-buttons-main-container">
              <div className="caption-popupbox-Buttons">
                <button
                  className="caption-popupbox-btns"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
              <div className="caption-popupbox-Buttons">
                <button
                  className="caption-popupbox-btns"
                  onClick={handleDiscardChanges}
                >
                  Discard Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Caption;
