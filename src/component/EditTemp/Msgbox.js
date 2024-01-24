import React, { useState } from 'react';
import './Msgbox.css';

function Update () {
  const [formData, setFormData] = useState({
    tabName_6th: '',
    selectionPanelName_5th: '',
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

  const handleUpdate = () => {
    // Add functionality for back button if needed
    console.log('Update button clicked');
  };

  return (
    <div className="form-container-updates">
      {/* <h2 className='h2-onedamage'>Creating A Page With 1 Damage Panel</h2> */}
      <p className='p-updates'>Creating A Page With 1 Selection Panel.The Selection Panel Name is what will appear on the report.</p>
      {/* <form onSubmit={handleSubmit}> */}
      <div className='label-container-updates'>
      <label className='label-updates' htmlFor="field1">Tab Name:</label>
        <input
          className='input-updates'
          type="text"
          name="tabName_6th"
          // placeholder="Enter your first value"
          value={formData.tabName_6th}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className='label-container-updates'>
        <label className='label-updates' htmlFor="field2">Selection Panel Name:</label>
        <input
          className='input-updates'
          type="text"
          name="selectionPanelName_5th"
          // placeholder="Enter your second value"
          value={formData.damagePanelName_5th}
          onChange={handleInputChange}
          required
        />
        </div>
        <div className="button-container-updates">
          <button type="button" className="cancel-button-updates" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="update-button-updates" onClick={handleUpdate}>
            Update
          </button>
         
        </div>
      {/* </form> */}
    </div>
  );
}

export default Update;
