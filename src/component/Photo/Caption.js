// import React from "react";
// import img7 from "../icons/notes.png";
// import "./Caption.css";
// const Caption = () => {
//   return (
//     <div className="Caption-container">
//       <label>Caption</label>
//       <br />
//       <input className="input-caption"></input>
//       <img src={img7} alt="" id="C-button" />
//     </div>
//   );
// };
// export default Caption;
// import React, { useState } from "react";
// import img7 from "../icons/notes.png";
// import editor from "../icons/content-creator.png";
// import close from "../icons/close_2997911.png";
// import "./Caption.css";

// const Caption = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [captionValue, setCaptionValue] = useState("");

//   const handlePopupOpen = () => {
//     setIsPopupOpen(true);
//     setCaptionValue(""); // Reset the input field when opening the popup
//   };

//   const handleSaveChanges = () => {
//     // Save logic here (you can send the data to the server or perform any other action)
//     setIsPopupOpen(false);
//   };

//   const handleDiscardChanges = () => {
//     // Discard changes
//     setIsPopupOpen(false);
//   };

//   const handleInputChange = (e) => {
//     setCaptionValue(e.target.value);
//   };

//   return (
//     <div className="Caption-container">
//       <label>Caption</label>
//       <br />
//       <input className="input-caption" />
//       <img src={img7} alt="" id="C-button" onClick={handlePopupOpen} />

//       {isPopupOpen && (
//         <div className="popup">
//           <img src={editor} alt="" id="CE-image" />
//           <label id="CaptionEditor"> Caption Editor</label>
//           <img src={close} alt="" id="Close-image" />
//           <br />
//           <input
//             className="input-popup"
//             value={captionValue}
//             onChange={handleInputChange}
//           />
//           <br />
//           <div className="SD-buttons-container">
//             <button className="SD-button" onClick={handleSaveChanges}>
//               Save Changes
//             </button>
//             <button className="SD-button" onClick={handleDiscardChanges}>
//               Discard Changes
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Caption;
import React, { useState } from "react";
import img7 from "./icons/notes.png";
import editor from "./icons/content-creator.png";
import close from "./icons/close_2997911.png";
import "./Caption.css";

const Caption = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [captionValue, setCaptionValue] = useState("");

  const handlePopupOpen = () => {
    if (!isPopupOpen) {
      // Only reset captionValue if the popup is not already open
      setCaptionValue("");
    }
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveChanges = () => {
    // Save logic here (you can send the data to the server or perform any other action)
    setIsPopupOpen(false);
  };

  const handleDiscardChanges = () => {
    // Discard changes
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    setCaptionValue(e.target.value);
  };

  return (
    <div className="Caption-container">
      <label>Caption</label>
      <br />
      <input
        className="input-caption"
        value={captionValue}
        onChange={handleInputChange}
      />
      <img src={img7} alt="" id="C-button" onClick={handlePopupOpen} />

      {isPopupOpen && (
        <div className="popup">
          <img src={editor} alt="" id="CE-image" />
          <label id="CaptionEditor"> Caption Editor</label>
          <img src={close} alt="" id="Close-image" onClick={handleClosePopup} />
          <br />
          {/* Update the input field in the popup */}
          <input
            className="input-popup"
            value={captionValue}
            onChange={handleInputChange}
          />
          <br />
          <div className="SD-buttons-container">
            <button className="SD-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="SD-button" onClick={handleDiscardChanges}>
              Discard Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Caption;
