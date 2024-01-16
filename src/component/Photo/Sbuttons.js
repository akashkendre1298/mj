import React from "react";
import img1 from "./icons/paste.png";
import styles from "./Sbuttons.module.css";

const Sbuttons = () => {
  return (
    <div>
      <ul className={styles.slist}>
        <li>
          <a href="#file">
            <div className={styles.prbutton}>
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.prbutton}>
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.prbutton}>
              <img src={img1} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.prbutton}>
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
