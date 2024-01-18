import React, { useState } from 'react';
import './Inspection.css';

const Inspection = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancel clicked');
  };

  const handleBack = () => {
    // Handle back action
    console.log('Back clicked');
  };

  const handleNext = () => {
    // Handle next action
    console.log('Next clicked');
  };

  const handleDone = () => {
    // Handle done action
    console.log('Done clicked');
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="dialog-inspection">
      <div className="dialog-header-inspection">
        <p className='para-inspection'>
          What would you like to have on your new panel? A damage panel is a section that has a list of conditions/narratives and a red and black section to move the items
          into. A selection panel is one list used for selecting types of materials, locations, etc:
        </p>
      </div>
      <div className="dialog-body-inspection">
      <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleRadioChange}
          />
          1 Damage Panel
        </label>

        <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleRadioChange}
          />
          2 Damage Panels
        </label>

        <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 3"
            checked={selectedOption === 'Option 3'}
            onChange={handleRadioChange}
          />
          1 Selection Panel
        </label>

        <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 4"
            checked={selectedOption === 'Option 4'}
            onChange={handleRadioChange}
          />
          2 Selection Panels
        </label>

        <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 5"
            checked={selectedOption === 'Option 5'}
            onChange={handleRadioChange}
          />
          1 Damage Panel & 1 Selection Panel
        </label>

        <label className='label-inspection'>
          <input
            type="radio"
            name="options"
            value="Option 6"
            checked={selectedOption === 'Option 6'}
            onChange={handleRadioChange}
          />
          1 Damage Panel & 2 Selection Panels
        </label>
      </div>
      <div className="dialog-footer-inspection">
        <button className="cancel-button-inspection" onClick={handleCancel}>
          Cancel
        </button>
        <button className="back-button-inspection" onClick={handleBack}>
          Back
        </button>
        <button className="next-button-inspection" onClick={handleNext}>
          Next
        </button>
        <button className="done-button-inspection" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Inspection;
