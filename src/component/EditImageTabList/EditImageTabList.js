import React, { useState } from "react";
import "./EditImageTabList.css";
import editimgclose from "../Photo/icons/close_2997911.png";
import PropTypes from "prop-types";
import Editor from "../Editor/Editor";
import AdjustBrightnessContent from "./AdjustBrightnessContent/AdjustBrightnessContent";
import AdjustContrastContent from "./AdjustContrast/AdjustContrastContent";
import RotateClockwiseContent from "./RotateClockwiseContent/RotateClockwiseContent";
import CropImageContent from "./CropImageContent/CropImageContent";
import DrawLineContent from "./DrawLineContent/DrawLineContent";
import imageUrl from "../../Assets/icons/download.jpeg";
import DrawArrowContent from "./DrawArrowContent/DrawArrowContent";
import DrawRectangleContent from "./DrawRectangleContent/DrawRectangleContent";
import DrawOvalContent from './DrawOvalContent/DrawOvalContent';

const EditImageTabList = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleClosePopup = () => {
    onRequestClose();
  };

  const tabNames = [
    "Crop Image",
    "Adjust Brightness",
    "Adjust Contrast",
    "Rotate Clockwise",
    "Draw Line",
    "Draw Arrow",
    "Draw Rectangle",
    "Draw Oval",
    "Add Text",
    "Overlay Image",
  ];

  const tabContentComponents = {
    1: <CropImageContent imageUrl={imageUrl} />,
    2: <AdjustBrightnessContent imageUrl={imageUrl} />,
    3: <AdjustContrastContent imageUrl={imageUrl} />,
    4: <RotateClockwiseContent imageUrl={imageUrl} />,
    5: <DrawLineContent imageUrl={imageUrl} />,
    6: <DrawArrowContent imageUrl={imageUrl} />,
    7: <DrawRectangleContent imageUrl={imageUrl} />,
    8: <DrawOvalContent imageUrl={imageUrl} />,
    9: <Editor />,
    // ... (add other tab content components)
  };

  return (
    <>
      {isOpen && (
        <div className="flex-container-for-tablist-for-edit-img">
          <div className="width-set-for-the-popup-windows-edit-image-section">
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
                    style={{ width: "100%" }}
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
      )}
    </>
  );
};

EditImageTabList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default EditImageTabList;
