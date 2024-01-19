import React, { useState } from "react";
import "./EditImageTabList.css";
import Buttons from "./../Photo/Buttons";
import editimgclose from "../Photo/icons/close_2997911.png";

const EditImageTabList = ({ isOpen, onRequestClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

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

  // Map each tab index to its corresponding content component
  const tabContentComponents = {
    // 1: <CropImageContent />,
    // 2: <AdjustBrightnessContent />,
    // 3: <AdjustContrastContent />,
    // ... (add other tab content components)
  };
  return (
    <>
      {/* {isPopupOpen && ( */}
      <div className="flex-container-for-tablist-for-edit-img">
        <div className="width-set-for-the-popup-windows-edit-image-section">
          {" "}
          <div className="edit-image-header-text-and-close-Button">
            <p className="edit-image-header-popup-window">Edit Image</p>

            <img
              src={editimgclose}
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
                  {tabContentComponents[activeTab]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default EditImageTabList;
