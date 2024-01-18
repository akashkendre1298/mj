import React from "react";
import img1 from "./icons/paste.png";
import "./Sbuttons.css";

const Sbuttons = () => {
  return (
    <div className="sbuttons-main-container">
      <ul className="sbuttons-unorder-list">
        <li>
          <a href="#file">
            <div className="sbuttons-unorder-list-images">
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className="sbuttons-unorder-list-images">
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className="sbuttons-unorder-list-images">
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className="sbuttons-unorder-list-images">
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sbuttons;
{
}
