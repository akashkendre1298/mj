import React, { useState } from 'react';
import './InternetLogin.css';

const InternetLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(true);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked!');
    // You can access the username and password states here for further processing
    console.log('Username:', username);
    console.log('Password:', password);
    // Close the popup after successful login
    setPopupOpen(false);
  };

  const handleClose = () => {
    // Close the popup when the close button (X sign) is clicked
    setPopupOpen(false);
    console.log('Close button clicked!');
  };
  // If the popup is not open, return null to render nothing
  if (!isPopupOpen) {
    return null;
  }
  
  return (
    <div className="popup-container-internetlogin">
      <div className="popup-internetlogin">
        <div className="popup-border-internetlogin">
          <span className="close-btn-internetlogin" onClick={handleClose}>X</span>
          <p className='p-internetlogin'>Enter your Home Inspector Pro Cloud Service user name and password, 
          This is the same as your homeinspectorpro.com username and password.</p><br/>
          <p className='p-internetlogin1'>If you do not already have a Cloud Service account, you can sign up for a monthly or annual 
            cloud service plan on the Home Inspector Pro website. This will allow you to upload reports,
            synchronize with the Home Inspector Pro Mobile program, and access additional cloud-based features.
          </p>
          <div className="input-row-internetlogin">
            <label htmlFor="username">Username:</label>
            <input
              className='input-internetlogin'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-row-internetlogin">
            <label htmlFor="password">Password:</label>
            <input
              className='input-internetlogin'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container-internetlogin">
            <button onClick={handleLogin}>Login</button>
            <button className="cancel-btn-internetlogin" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetLogin;