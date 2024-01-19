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

import "./Buttons.css";
import EditImageTabList from "./../EditImageTabList/EditImageTabList";

const Buttons = ({ onFileSelect }) => {
  // tablistconst [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  // close popup for edit image

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
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
            <div
              className="Buttons-orderlist-to-adjust-images"
              onClick={handlePopupOpen}
            >
              <img src={img2} alt="" />
            </div>
          </a>
        </li>
        {isPopupOpen && (
          <div className="edit-image-main-popup-container-css">
            {/* <EditImageTabList /> */}
            <div className="flex-container-for-tablist-for-edit-img">
              <div className="width-set-for-the-popup-windows-edit-image-section">
                {" "}
                <div className="edit-image-header-text-and-close-Button">
                  <p className="edit-image-header-popup-window">Edit Image</p>

                  <img
                    src={close}
                    className="edit-image-popup-close-image"
                    onClick={handleClosePopup}
                  />
                </div>
                <div className="flex">
                  <div className="tab-list-buttons-aa-bb">
                    {tabNames.map((tabName, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handleTabClick(index + 1)}
                        className={
                          activeTab === index + 1
                            ? "tab-list-active"
                            : "tab-list-button"
                        }
                      >
                        {tabName}
                      </button>
                    ))}
                    <div className="undo-redo-button-and-color-picker-combine">
                      <section className="undeo-redo-btns-after-tablist">
                        <button>Undo</button>
                        <button>Redo</button>
                      </section>
                      <section className="color-picker-heading-and-color-picker">
                        <p className="color-picker-heading">Current Color</p>
                        <button className="color-pickkkker"></button>
                      </section>
                    </div>
                  </div>
                  <div className="tab-list-content">
                    {tabNames.map((tabName, index) => (
                      <div
                        key={index + 1}
                        className={
                          activeTab === index + 1
                            ? "tab-list-pane tab-list-active"
                            : "tab-list-pane"
                        }
                      >
                        Content for {tabName}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <li>
          <a href="#file">
            <div className="Buttons-orderlist-to-adjust-images">
              <img src={img5} alt="" />
            </div>
          </a>
        </li> */}
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
        <div className="Add-Icons-popup-container">
          <div className="Add-Icons-Popup-header-container">
            <p className="Add-Icons-Popup-header-AddIcons">
              Select and click on the icons to Add
            </p>
            <img
              src={close}
              alt="Close"
              className="Add-IconsPopup-close-image"
              onClick={closePopup}
            />
          </div>
          <hr className="line1" />

          <hr className="line2" />
        </div>
      )}
    </>
  );
};

export default Buttons;
