import React, { useEffect, useState } from 'react';
import './Inspection.css';
import OneDamage from '../OneDamage/OneDamage';
import twoDamage from "../twoDamage/TwoDamage";
import OneSelection from "../oneSelection/OneSelection";
import twoSelection from "../twoSelection/TwoSelection";
import oneDamageSelection from "../oneDamageSelection/OneDamageSelection";
import OneDamageTwoSelection from '../oneDamageTwoSelection/OneDamageTwoSelection';

const Inspection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [popupStates, setPopupStates] = useState({
    'Option 1': false,
    'Option 2': false,
    'Option 3': false,
    'Option 4': false,
    'Option 5': false,
    'Option 6': false,
  });

  const componentsMap = {
    'Option 1': OneDamage,
    'Option 2': twoDamage,
    'Option 3': OneSelection,
    'Option 4': twoSelection,
    'Option 5': oneDamageSelection,
    'Option 6': OneDamageTwoSelection,
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  useEffect(() => {
    // Check if the selectedOption exists and the corresponding popup state is false
    if (selectedOption && !popupStates[selectedOption]) {
      console.log('Closing popup');
      // Reset the selected option
      setSelectedOption('');
    }
  }, [popupStates]);

  const openPopup = () => {
    setPopupStates((prevState) => ({
      ...prevState,
      [selectedOption]: true,
    }));
  };

  const closePopup = () => {
    setPopupStates((prevState) => ({
      ...prevState,
      [selectedOption]: false,

    }));
    console.log("closing")
  };



  const handleCancel = () => {
    // Reset the selected option and close the popup
    setSelectedOption('');
    setPopupStates((prevState) => ({
      ...prevState,
      [selectedOption]: false,
    }));
    console.log('done clicked');
  };

  const handleBack = () => {

    console.log('Back clicked');
  };


  // const handleNext = () => {
  //   // Handle next action
  //   console.log('Next clicked');
  //   openPopup();
  // };

  // const handleDone = () => {
  //   // Handle done action

  //   console.log('Done clicked');
  //   // console.log('Selected option:', selectedOption);
  //   closePopup();
  // };


  return (
    <div className="dialog-inspection">
      <div className="dialog-header-inspection">
        <p className='para-inspection'>
          What would you like to have on your new panel? A damage panel is a section that has a list of conditions/narratives and a red and black section to move the items into. A selection panel is one list used for selecting types of materials, locations, etc:
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
        {/* <button className="next-button-inspection" onClick={handleNext}>
          Next
        </button> */}
        <button className="done-button-inspection" onClick={handleCancel}>
          Done
        </button>
      </div>
      {/* Render the popup based on the selected option */}
      {popupStates[selectedOption] && React.createElement(componentsMap[selectedOption])}
    </div>
  );
};

export default Inspection;
