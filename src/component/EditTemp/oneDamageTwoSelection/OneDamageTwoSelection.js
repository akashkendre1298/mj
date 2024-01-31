import React, { useState } from 'react';
import './OneDamageTwoSelection.css';

function OneDamageTwoSelection({ setIsPopupOpen, isPopupOpen, onClose }) {
  const [formData, setFormData] = useState({
    tabName_5th: '',
    damagePanelName_4th: '',
    selectionPanelName_4th: '',
    selectionPanelName_5th: '',
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

  // const handleNext = () => {
  //   // Add functionality for next button if needed
  //   console.log('Next button clicked');
  // };

  const handleDone = () => {
    // Add functionality for done button if needed
    setIsPopupOpen(false);
    console.log('Done button clicked');
  };

  return (
    <div className="form-container-onedamagetwoselection">
      <p className="p-onedamagetwoselection">Creating the page with 1 Damage Panel and 2 Selection Panel. The Damage Panel Name will be appear on the report.</p>
      <form onSubmit={handleSubmit}>
        <div className="label-container-onedamagetwoselection">
          <label className="label-onedamagetwoselection">
            Tab Name:
          </label>
          <input
            className="input1-onedamagetwoselection"
            type="text"
            name="tabName_5th"
            // placeholder="Enter your first value"
            value={formData.tabName_5th}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-onedamagetwoselection">
          <label className="label-onedamagetwoselection">
            Damage Panel Name:
          </label>
          <input
            className="input2-onedamagetwoselection"
            type="text"
            name="damagePanelName_4th"
            // placeholder="Enter your second value"
            value={formData.damagePanelName_4th}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-onedamagetwoselection">
          <label className="label-onedamagetwoselection">
            1st Selection Panel Name:
          </label>
          <input
            className="input3-onedamagetwoselection"
            type="text"
            name="selectionPanelName_4th"
            // placeholder="Enter your third value"
            value={formData.selectionPanelName_4th}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-onedamagetwoselection">
          <label className="label-onedamagetwoselection">
            2nd Selection Panel Name:
          </label>
          <input
            className="input-onedamagetwoselection"
            type="text"
            name="selectionPanelName_5th"
            // placeholder="Enter your third value"
            value={formData.selectionPanelName_5th}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="button-container-onedamagetwoselection">
          <button type="button" className="cancel-button-onedamagetwoselection" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-onedamagetwoselection" onClick={handleBack}>
            Back
          </button>
          {/* <button type="button" className="next-button-onedamagetwoselection" onClick={handleNext}>
            Next
          </button> */}
          <button type="submit" className="done-button-onedamagetwoselection" onClick={handleDone}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default OneDamageTwoSelection;
