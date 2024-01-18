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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add functionality for form submission if needed
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Creating A Page With 1 Damage Panel</h2>
      <p>The Damage Panel Name is what will appear on the report.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tab-name">Tab Name:</label>
        <input
          type="text"
          id="tab-name"
          name="tabName"
          value={formData.tabName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="damage-panel-name">Damage Panel Name:</label>
        <input
          type="text"
          id="damage-panel-name"
          name="damagePanelName"
          value={formData.damagePanelName}
          onChange={handleInputChange}
          required
        />
        <div className="button-container">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="back-button" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="next-button" onClick={handleNext}>
            Next
          </button>
          <button type="submit" className="done-button">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default OneDamage;
