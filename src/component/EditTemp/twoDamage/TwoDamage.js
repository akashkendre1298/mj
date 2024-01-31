import React, { useState } from 'react';
import './TwoDamage.css';

function TwoDamage({ setIsPopupOpen, isPopupOpen, onClose }) {
  const [formData, setFormData] = useState({
    tabName_1st: '',
    damagePanelName_1st: '',
    damagePanelName_2nd: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission if needed
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    // Add functionality for cancel button if needed
    console.log('Cancel button clicked');
    setIsPopupOpen(false)
  };

  const handleBack = () => {
    // Add functionality for back button if needed
    onClose()
    console.log('Back button clicked');
  };

  // const handleNext = () => {
  //   // Add functionality for next button if needed
  //   console.log('Next button clicked');
  // };

  const handleDone = () => {
    // Add functionality for done button if needed
    console.log('Done button clicked');
    setIsPopupOpen(false)
  };

  return (
    <div className="form-container-twodamage">
      <p className="p-twodamage">Creating the page with 2 Damage Panels Each Damage Panel willhave it's own section on the report. The Damage Panel Names are what will appear on the report.</p>
      <form onSubmit={handleSubmit}>
        <div className="label-container-twodamage">
          <label className="label-twodamage">
            Tab Name:
          </label>
          <input
            className="input1-twodamage"
            type="text"
            name="tabName_1st"
            // placeholder="Enter your first value"
            value={formData.tabName_1st}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-twodamage">
          <label className="label-twodamage">
           1st Damage Panel Name:
          </label>
          <input
            className="input2-twodamage"
            type="text"
            name="damagePanelName_1st"
            // placeholder="Enter your second value"
            value={formData.damagePanelName_1st}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-twodamage">
          <label className="label-onedamage">
            2nd Damage Panel Name:
          </label>
          <input
            className="input-twodamage"
            type="text"
            name="damagePanelName_2nd"
            // placeholder="Enter your third value"
            value={formData.damagePanelName_2nd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-container-twodamage">
          <button type="button" className="cancel-button-twodamage" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-twodamage" onClick={handleBack}>
            Back
          </button>
          {/* <button type="button" className="next-button-twodamage" onClick={handleNext}>
            Next
          </button> */}
          <button type="submit" className="done-button-twodamage" onClick={handleDone}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default TwoDamage;
