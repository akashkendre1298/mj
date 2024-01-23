import React, { useState } from "react";

const Msgbox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "qwaesrtf":
        return (
          <div>
            <p>gchsdajsdbjh</p>
          </div>
        );
      case "qwaesrasdfgtf":
        return (
          <div>
            <p>62365232</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNextButtonClick = () => {
    // You can perform any other action here before showing the content
    setShowContent(true);
  };

  return (
    <div>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              value="qwaesrtf"
              checked={selectedOption === "qwaesrtf"}
              onChange={handleRadioChange}
            />
            qwaesrtf
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="qwaesrasdfgtf"
              checked={selectedOption === "qwaesrasdfgtf"}
              onChange={handleRadioChange}
            />
            qwaesrasdfgtf
          </label>
        </li>
      </ul>
      <div>
        <button onClick={handleNextButtonClick}>next</button>
      </div>
      {showContent && renderContent()}
    </div>
  );
};

export default Msgbox;

