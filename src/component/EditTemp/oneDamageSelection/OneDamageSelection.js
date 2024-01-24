import React, { useState } from 'react';
import './OneDamageSelection.css';

function OneDamageSelection({ setIsPopupOpen, isPopupOpen, onClose }) {
  const [formData, setFormData] = useState({
    tabName_4th: '',
    damagePanelName_3rd: '',
    selectionPanelName_3rd: '',
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
    setIsPopupOpen(false);
  };

  const handleBack = () => {
    // Add functionality for back button if needed
    console.log('Back button clicked');
    onClose();
  };

  const handleNext = () => {
    // Add functionality for next button if needed
    console.log('Next button clicked');
  };

  const handleDone = () => {
    // Add functionality for done button if needed
    console.log('Done button clicked');
  };

  return (
    <div className="form-container-onedamageselection">
      <p className="p-onedamageselection">Creating the page with 1 Damage Panel and 1 Selection Panel. The Damage Panel Name will be appear on the report.</p>
      <form onSubmit={handleSubmit}>
        <div className="label-container-onedamageselection">
          <label className="label-onedamageselection">
            Tab Name:
          </label>
          <input
            className="input-onedamageselection"
            type="text"
            name="tabName_4th"
            // placeholder="Enter your first value"
            value={formData.tabName_4th}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-onedamageselection">
          <label className="label-onedamageselection">
            Damage Panel Name:
          </label>
          <input
            className="input-onedamageselection"
            type="text"
            name="damagePanelName_3rd"
            // placeholder="Enter your second value"
            value={formData.damagePanelName_3rd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-onedamageselection">
          <label className="label-onedamageselection">
            Selection Panel Name:
          </label>
          <input
            className="input-onedamageselection"
            type="text"
            name="selectionPanelName_3rd"
            // placeholder="Enter your third value"
            value={formData.selectionPanelName_3rd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-container-onedamageselection">
          <button type="button" className="cancel-button-onedamageselection" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-onedamageselection" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="next-button-onedamageselection" onClick={handleNext}>
            Next
          </button>
          <button type="submit" className="done-button-onedamageselection" onClick={handleDone}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default OneDamageSelection;
