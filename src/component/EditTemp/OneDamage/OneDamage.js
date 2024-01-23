import React, { useState } from 'react';
import './OneDamage.css';

function OneDamage() {
  const [formData, setFormData] = useState({
    tabName: '',
    damagePanelName: '',
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
    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Done button clicked');
  };

  // Access the stored data when the component mounts
  React.useEffect(() => {
    // Retrieve the stored data from localStorage
    const storedFormData = localStorage.getItem('formData');

    // Check if the data exists before updating the state
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);
  return (
    <div className="form-container-onedamage">
      {/* <h2 className='h2-onedamage'>Creating A Page With 1 Damage Panel</h2> */}
      <p className='p-onedamage'>Creating A Page With 1 Damage Panel.The Damage Panel Name is what will appear on the report.</p>
      {/* <form onSubmit={handleSubmit}> */}
      <div className='label-container-onedamage'>
      <label className='label-onedamage' htmlFor="field1">Tab Name:</label>
        <input
          className='input-onedamage'
          type="text"
          name="tabName"
          // placeholder="Enter your first value"
          value={formData.tabName}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className='label-container-onedamage'>
        <label className='label-onedamage' htmlFor="field2">damage Panel Name:</label>
        <input
          className='input-onedamage'
          type="text"
          name="damagePanelName"
          // placeholder="Enter your second value"
          value={formData.damagePanelName}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="button-container-onedamge">
          <button type="button" className="cancel-button-onedamage" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button-onedamage" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="next-button-onedamage" onClick={handleNext}>
            Next
          </button>
          <button type="button" className="done-button-onedamage" onClick={handleDone}>
          Done
        </button>
        
        </div>
      {/* </form> */}
    </div>
  );
}

export default OneDamage;
