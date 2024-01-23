// React Component
import React from 'react';
import './OpenTemp.css';

const OpenTemp = ({ onClose }) => {
     return (
          <div className='Contant-OpenTemp'>
               <div className='template-card_OpenTemp'>
                    <div className="template-selector-OpenTemp">
                         <span className='selectOpenTemp'>Select A Template</span>
                         <button onClick={onClose} className="close-button-OpenTemp">X</button>
                    </div>
                    <div className='para1-OpenTemp'>
                         <p>Below are a list of all available templates by file name. You can update the description and set which template is default:</p>
                    </div>
                    <div className="template-card__body__center__input_OpenTemp">
                         <textarea className="template-card__body__center__input__field" rows="5" cols="50"></textarea>
                    </div>
                    <div className='TempName-OpenTemp'>
                         <p>Template Name</p>
                    </div>
                    <div className='para2_OpenTemp'>
                         <p></p>
                    </div>
                    <div className='TempName-OpenTemp'>
                         <p>Template Description</p>
                    </div>
                    <div className='para3_OpenTemp'>
                         <p></p>
                    </div>
                    <div className="button-container-OpenTemp">
                         <button className="open-button_OpenTemp">Open</button>
                         <button className="cancel-button_OpenTemp">Cancel</button>
                    </div>
               </div>
          </div>
     )
};

export default OpenTemp;
