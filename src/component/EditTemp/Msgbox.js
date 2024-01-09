import React from "react";
import './Msgbox.css'

const Msgbox = ({ onClose }) => {
    return(
      <>
        <div className='Contant'>
          <div className='template-card '>
            <div className="template-selector">
                <span className='selectTemp'>Select A Template</span>
                <button className="close-button" onClick={handleClosePopup}>X</button>              
            </div>
            <div className='para1'> 
              <p>Enter new name of menu item</p>
              <input type="text" name="myText" id="myText" className="menutext"/>
            </div>
            <div className="button-container">
               <button className="open-button">Ok</button>
               <button className="cancel-button">Cancel</button>
          </div>
          </div>
        </div>
      </>
    );
};
export default Msgbox;