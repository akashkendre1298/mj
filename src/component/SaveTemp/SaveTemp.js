// SaveTemp.js

import React from "react";
import "./SaveTemp.css";
import close from "../Photo/icons/close_2997911.png";

const SaveTemp = ({ onClose }) => {
  return (
    <div className="Contant_SaveTemp z-50">
      <div className="template-card_SaveTemp">
        <div className="template-selector_SaveTemp">
          <span className="selectTemp">Save Your Template</span>
          <div className="btn-in-save-template">
            {/* <img
            src={close}
            alt="Close"
            style={{ width: "10px", cursor: "pointer" }}
           
          /> */}

            <p className="Add-IconsPopup-close-image" onClick={onClose}>
              X
            </p>
          </div>
          {/* <button onClick={onClose} className="close-button">X</button> */}
        </div>
        <div className="para1_SaveTemp">
          <p>
            Below are a list of all available templates by file name. You can
            update the description and set which template is default:
          </p>
        </div>
        <div className="template-card__body__center__input_SaveTemp">
          <textarea
            className="template-card__body__center__input__field_SaveTemp"
            rows="5"
            cols="50"
          ></textarea>
        </div>
        <div className="TempName">
          <p>File Name</p>
        </div>
        <div className="para2_SaveTemp">
          <p></p>
        </div>
        <div className="TempName">
          <p>Template Name</p>
        </div>
        <div className="para2_SaveTemp">
          <p></p>
        </div>
        <div className="TempName">
          <p>Template Description</p>
        </div>
        <div className="para3_SaveTemp">
          <p></p>
        </div>
        <div className="para1">
          <p>
            Check the following box to make this the default template. You
            cannot uncheck a box, instead open the template you would like to
            make the default template, click Save Template, and check the box to
            set it as the default.
          </p>
        </div>
        <div className="chkbox flex gap-3 items-center">
          <label className="flex gap-3 items-center">
            <input type="checkbox" />
            Set as default
          </label>
        </div>
        <div className="button-container">
          <button className="open-button_SaveTemp">Open</button>
          <button className="cancel-button_SaveTemp">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SaveTemp;
