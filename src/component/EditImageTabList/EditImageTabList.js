import React, { useState } from "react";
import Modal from "react-modal";
import "./EditImageTabList.css";

const EditImageTabList = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <div className="flex-container-for-tablist-for-edit-img">
        <div className="width-set-for-the-popup-windows-edit-image-section">
          <div className="tab-list-buttons">
            {[...Array(8)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handleTabClick(index + 1)}
                className={
                  activeTab === index + 1
                    ? "tab-list-active"
                    : "tab-list-button"
                }
              >
                Tab {index + 1}
              </button>
            ))}
          </div>

          <div className="tab-list-content">
            {[...Array(8)].map((_, index) => (
              <div
                key={index + 1}
                className={
                  activeTab === index + 1
                    ? "tab-list-pane tab-list-active"
                    : "tab-list-pane"
                }
              >
                Content for Tab {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditImageTabList;
