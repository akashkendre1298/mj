import React, { useRef, useState } from "react";
import img1 from "./icons/gallery.png";
import img2 from "./icons/document.png";
import img5 from "./icons/camera-48.png";
import img6 from "./icons/trash.png";
import img7 from "./icons/notes.png";
import img8 from "./icons/diskette.png";
import img9 from "./icons/search-in-browser-64.png";
import img10 from "./icons/preview-48.png";
import img11 from "./icons/delete.png";
import check from "./icons/check-mark.png";
import close from "./icons/close_2997911.png";
import "./Buttons.css";
import EditImageTabList from "./../EditImageTabList/EditImageTabList";
import Editor from "./../Editor/Editor";
import PropTypes from "prop-types";

const Buttons = ({ onFileSelect }) => {
  // tablistconst [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  // close popup for edit image

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Define custom tab names
  const tabNames = [
    "Crop Image",
    "Adjust Brightness",
    "Adjust Contrass",
    "Rotate Clockwise",
    "Draw Line",
    "Draw Arrow",
    "Draw Rectangle",
    "Draw Oval",
    "Add Text",
    "Overlay Image",
  ];

  const [captionValue, setCaptionValue] = useState("");
  const fileInputRef = useRef(null);
  const uploadedFileRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleImg1Click = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadedFileRef.current = e.target.files[0];
      onFileSelect(uploadedFileRef.current);
    }
  };

  const handleImg6Click = () => {
    // Delete the uploaded file
    uploadedFileRef.current = null;
    onFileSelect(null); // Notify parent component that no file is selected
  };

  const handleImg8Click = () => {
    // Save the uploaded data (you can implement the saving logic here)
    console.log("Save data:", uploadedFileRef.current);
  };
  // Function to open the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setIsPopupOpen(false);
  };

  const handleInputSubmit = () => {
    // Handle the input value as needed
    console.log("Input value:", inputValue);
    closePopup();
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*,video/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <ul className="Buttons-unorderlist-container">
        <li>
          <div
            className="Buttons-orderlist-to-adjust-images"
            onClick={handleImg1Click}
          >
            <img src={img1} alt="gallery" />
          </div>
        </li>
        <li>
          <a href="#file">
            <div className="Buttons-orderlist-to-adjust-images">
              <img src={img2} alt="" onClick={handlePopupOpen} />
              {isPopupOpen && (
                <div className="edit-image-main-popup-container-css">
                  <EditImageTabList
                    isOpen={isPopupOpen}
                    onRequestClose={closePopup}
                  />
                </div>
              )}
            </div>
          </a>
        </li>

        <li>
          <a href="#file">
            <div
              className="Buttons-orderlist-to-adjust-images"
              onClick={handleImg6Click}
            >
              <img src={img6} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className="Buttons-orderlist-to-adjust-images">
              <img src={img7} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div
              className="Buttons-orderlist-to-adjust-images"
              onClick={handleImg8Click}
            >
              <img src={img8} alt="" />
            </div>
          </a>
        </li>
      </ul>

      <div>
        <ul className="Buttons-unoorderlist-for-icons-buttons">
          {/* ... other list items */}
          <li>
            <a href="#file" onClick={openPopup}>
              <div className="Buttons-orderlist-for-icons-buttons">
                <img src={img9} alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#file">
              <div className="Buttons-orderlist-for-icons-buttons">
                <img src={img10} alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#file">
              <div className="Buttons-orderlist-for-icons-buttons">
                <img src={img11} alt="" />
              </div>
            </a>
          </li>
        </ul>
      </div>

      {showPopup && (
        <div className="Add-Icons-popup-main-container">
          <div className="Add-Icons-Popup-header-container">
            <p className="Add-Icons-Popup-header-AddIcons">
              Select and click on the icons to Add
            </p>
            <div className="divAdd-IconsPopup-close-image">
              <img
                src={close}
                alt="Close"
                className="Add-IconsPopup-close-image"
                onClick={closePopup}
              />
            </div>
          </div>
          <div className="Add-Icons-Search-button-main-contaier">
            <div className="Add-Icons-Search-Button">
              <p>Search</p>
            </div>
            <div className="Add-Icons-Search-Button">
              <p>Add</p>
            </div>
          </div>
          <div className="Add-icon-horizonatl-line1">
            <hr></hr>
          </div>
          <div className="Add-icons-select-icons-from-given-main-container">
            <img
              src={check}
              alt="Icon1"
              className="Add-icon-select-icon-image-tage-ite"
            />
            <img
              src={check}
              alt="Icon2"
              className="Add-icon-select-icon-image-tage-ite"
            />
            <img
              src={check}
              alt="Icon3"
              className="Add-icon-select-icon-image-tage-ite"
            />
            <img
              src={check}
              alt="Icon4"
              className="Add-icon-select-icon-image-tage-ite"
            />
            <img
              src={check}
              alt="Icon5"
              className="Add-icon-select-icon-image-tage-ite"
            />
            <img
              src={check}
              alt="Icon6"
              className="Add-icon-select-icon-image-tage-ite"
            />
          </div>
          <div className="Add-icon-horizonatl-line1">
            <hr></hr>
          </div>

          <div className="Add-Icons-cancel-btn-zz">
            <button className="Add-Icons-cancel-btn-yy">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};
Buttons.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};
export default Buttons;
