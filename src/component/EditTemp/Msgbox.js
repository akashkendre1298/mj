import React from 'react';
import './Msgbox.css';

function Msgbox(props) {
  return (
    <div className="dialog-container">
      <div className="dialog-header">
        <span className="dialog-title">Input</span>
        <button className="dialog-close-button" onClick={props.onClose}>X</button>
      </div>
      <div className="dialog-body">
        <div className="dialog-icon-container">
          <i className="fa fa-info-circle"></i>
        </div>
        <div className="dialog-content">
          <span className="dialog-text">Enter new name of the menu item.</span>
          <input className="dialog-input" type="text" placeholder="General Information" />
        </div>
      </div>
      <div className="dialog-footer">
        <button className="dialog-button dialog-ok-button">OK</button>
        <button className="dialog-button dialog-cancel-button" onClick={props.onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Msgbox;
