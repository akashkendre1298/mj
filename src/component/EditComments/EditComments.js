import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "./../Footer/Footer";
import PannelComponent from "./../Panel/PannelComponent/PannelComponent";
import "./EditComments.css";

const EditComments = ({ onClose }) => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const handleAddButtonClick = () => {
    setAddModalVisible(true);
  };

  const handleModalClose = () => {
    setAddModalVisible(false);
  };

  const handleOkButtonClick = () => {
    // Add your logic for handling the "Ok" button click
    setAddModalVisible(false);
  };

  const handleCancelButtonClick = () => {
    // Add your logic for handling the "Cancel" button click
    setAddModalVisible(false);
  };

  return (
    <>
      <div>{/* <Header /> */}</div>
      <div className="cont-editcomm">
        <div className="button-editcomm">
          <div className="p-4">
            <div className="flex flex-col">
              <button className="btn-editcomm mr-2 w-24 text-sm">
                Move Up
              </button>
              <button className="btn-editcomm mr-2 w-24 text-sm">
                Move Down
              </button>
              <button className="btn-editcomm mr-2  w-24 text-sm">Sort</button>
              <button className="btn-editcomm mr-2  w-24 text-sm">
                Delete
              </button>
              <button
                className="btn-editcomm  w-24 text-sm"
                onClick={handleAddButtonClick}
              >
                Add
              </button>
              {isAddModalVisible && (
                <div className="Contant-editcomm">
                  <div className="template-card-editcomm">
                    <div className="template-selector-editcomm">
                      <span className="selecteditcomm">Select A Template</span>
                      <button
                        onClick={handleModalClose}
                        className="close-button-editcomm"
                      >
                        X
                      </button>
                    </div>
                    <div className="scroll-box-editcomm p-4 bg-gray-100"></div>

                    <div className="button-container-editcomm">
                      <button className="open-button-editcomm">Ok</button>
                      <button className="cancel-button-editcomm">Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Add Modal/Pop-up */}

            {/* Dropdown */}
            <div className="">
              <label className="block text-sm font-semibold text-gray-600">
                Item Separator
              </label>
              <select className="btn w-24 h-7">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                {/* Add more options as needed */}
              </select>
        </div>

            {/* Label, Description, and Textbox */}
            <div className="">
              <label className="block text-sm font-semibold text-gray-600">
                Description text
              </label>
              <textarea className="btn-editcomm w-24 h-7 border"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
};

export default EditComments;
