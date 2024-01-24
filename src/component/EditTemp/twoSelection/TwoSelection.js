import React, { useState } from 'react';
import './TwoSelection.css';

function TwoSelection({ setIsPopupOpen, isPopupOpen, onClose }) {
  const [formData, setFormData] = useState({
    tabName_3rd: '',
    selectionPanelName_1st: '',
    selectionPanelName_2nd: '',
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
    onClose(); // Call the onClose function passed from the parent
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
    <div className="form-container-twoselection">
      <p className="p-twoselection">Creating the page with 2 Selection Panels. The name of the first Selection Panel Name will appear on the report.</p>
      <form onSubmit={handleSubmit}>
        <div className="label-container-twoselection">
          <label className="label-twoselection">
            Tab Name:
          </label>
          <input
            className="input-twoselection"
            type="text"
            name="tabName_3rd"
            // placeholder="Enter your first value"
            value={formData.tabName_3rd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-twoselection">
          <label className="label-twoselection">
            1st Selection Panel Name:
          </label>
          <input
            className="input-twoselection"
            type="text"
            name="selectionPanelName_1st"
            // placeholder="Enter your second value"
            value={formData.selectionPanelName_1st}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="label-container-twoselection">
          <label className="label-oneselection">
            2nd Selection Panel Name:
          </label>
          <input
            className="input-twoselection"
            type="text"
            name="selectionPanelName_2nd"
            // placeholder="Enter your third value"
            value={formData.selectionPanelName_2nd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="button-container-twoselection">
          <button type="button" className="cancel-button-twoselection" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-twoselection" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="next-button-twoselection" onClick={handleNext}>
            Next
          </button>
          <button type="submit" className="done-button-twoselection" onClick={handleDone}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default TwoSelection;
