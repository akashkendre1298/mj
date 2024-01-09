// FooterComponent.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <button className="settings-button">Application Settings</button>
      </div>
      <div className="right-section">
        <form className="connection-form">
          {/* Your form fields go here */}
          <label>
            <input type="radio" name="connection" value="option1" />
            Not Connected
          </label>

          {/* Add more radio buttons as needed */}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
