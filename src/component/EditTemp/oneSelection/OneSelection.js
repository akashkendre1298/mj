import React, { useState } from 'react';
import './OneSelection.css';

function OneSelection () {
  const [formData, setFormData] = useState({
    tabName_2nd: '',
    selectionPanelName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    // Add functionality for cancel button if needed
    console.log('Cancel button clicked');
  };

  const handleBack = () => {
    // Add functionality for back button if needed
    console.log('Back button clicked');
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
    <div className="form-container-oneselection">
      {/* <h2 className='h2-onedamage'>Creating A Page With 1 Damage Panel</h2> */}
      <p className='p-oneselection'>Creating A Page With 1 Selection Panel.The Selection Panel Name is what will appear on the report.</p>
      {/* <form onSubmit={handleSubmit}> */}
      <div className='label-container-oneselection'>
      <label className='label-oneselection' htmlFor="field1">Tab Name:</label>
        <input
          className='input-oneselection'
          type="text"
          name="tabName_2nd"
        //   placeholder="Enter your first value"
          value={formData.tabName_2nd}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className='label-container-oneselection'>
        <label className='label-oneselection' htmlFor="field2">Selection Panel Name:</label>
        <input
          className='input-oneselection'
          type="text"
          name="selectionPanelName"
        //   placeholder="Enter your second value"
          value={formData.selectionPanelName}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="button-container-onselection">
          <button type="button" className="cancel-button-oneselection" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-oneselection" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="next-button-oneselection" onClick={handleNext}>
            Next
          </button>
          <button type="submit" className="done-button-oneselection" onClick={handleDone}>
            Done
          </button>
        </div>
      {/* </form> */}
    </div>
  );
}

export default OneSelection;
