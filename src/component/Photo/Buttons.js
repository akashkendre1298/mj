import React, { useRef } from "react";
import img1 from "./icons/gallery.png";
import img2 from "./icons/document.png";
import img3 from "./icons/video-camera (1).png";
import img4 from "./icons/document.png";
import img5 from "./icons/camera-48.png";
import img6 from "./icons/trash.png";
import img7 from "./icons/notes.png";
import img8 from "./icons/diskette.png";
import img9 from "./icons/search-in-browser-64.png";
import img10 from "./icons/preview-48.png";
import img11 from "./icons/delete.png";
import styles from "./Buttons.module.css";

const Buttons = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const uploadedFileRef = useRef(null);

  const handleImg1Click = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadedFileRef.current = e.target.files[0];
      onFileSelect(uploadedFileRef.current);
    }
  };

  const handleImg6Click = () => {
    // Delete the uploaded file
    uploadedFileRef.current = null;
    onFileSelect(null); // Notify parent component that no file is selected
  };

  const handleImg8Click = () => {
    // Save the uploaded data (you can implement the saving logic here)
    console.log("Save data:", uploadedFileRef.current);
  };

  return (
    <>
      {/* Hidden file input for img1 */}
      <input
        type="file"
        accept="image/*,video/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <ul className={styles.buttonlist}>
        <li>
          <div className={styles.buttonitem} onClick={handleImg1Click}>
            <img src={img1} alt="gallery" />
          </div>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem}>
              <img src={img2} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem}>
              <img src={img3} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem}>
              <img src={img4} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem}>
              <img src={img5} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem} onClick={handleImg6Click}>
              <img src={img6} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem}>
              <img src={img7} alt="" />
            </div>
          </a>
        </li>
        <li>
          <a href="#file">
            <div className={styles.buttonitem} onClick={handleImg8Click}>
              <img src={img8} alt="" />
            </div>
          </a>
        </li>
      </ul>

      <div>
        <ul className={styles.prev}>
          <li>
            <a href="#file">
              <div className={styles.previtem}>
                <img src={img9} alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#file">
              <div className={styles.previtem}>
                <img src={img10} alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="#file">
              <div className={styles.previtem}>
                <img src={img11} alt="" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;

// import React, { useRef } from "react";
// import img1 from "../icons/gallery.png";
// import img2 from "../icons/document.png";
// import img3 from "../icons/video-camera (1).png";
// import img4 from "../icons/document.png";
// import img5 from "../icons/camera-48.png";
// import img6 from "../icons/trash.png";
// import img7 from "../icons/notes.png";
// import img8 from "../icons/diskette.png";
// import img9 from "../icons/search-in-browser-64.png";
// import img10 from "../icons/preview-48.png";
// import img11 from "../icons/delete.png";
// import styles from "./Buttons.module.css";

// const Buttons = ({ onFileSelect }) => {
//   const fileInputRef = useRef(null);
//   const uploadedFileRef = useRef(null);

//   const handleImg1Click = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       uploadedFileRef.current = e.target.files[0];
//       onFileSelect(uploadedFileRef.current);
//     }
//   };

//   const handleImg6Click = () => {
//     // Delete the uploaded file
//     uploadedFileRef.current = null;
//     onFileSelect(null); // Notify parent component that no file is selected
//   };

//   const handleImg8Click = () => {
//     // Save the uploaded data (you can implement the saving logic here)
//     console.log("Save data:", uploadedFileRef.current);
//   };

//   return (
//     <>
//       {/* Hidden file input for img1 */}
//       <input
//         type="file"
//         accept="image/*,video/*"
//         style={{ display: "none" }}
//         ref={fileInputRef}
//         onChange={handleFileChange}
//       />

//       <ul className={styles.buttonlist}>
//         <li>
//           <div className={styles.buttonitem} onClick={handleImg1Click}>
//             <img src={img1} alt="gallery" />
//           </div>
//         </li>
//         {/* ... (other buttons) */}
//         <li>
//           <a href="#file">
//             <div className={styles.buttonitem} onClick={handleImg6Click}>
//               <img src={img6} alt="" />
//             </div>
//           </a>
//         </li>
//         <li>
//           <a href="#file">
//             <div className={styles.buttonitem} onClick={handleImg8Click}>
//               <img src={img8} alt="" />
//             </div>
//           </a>
//         </li>
//       </ul>

//       {/* ... (rest of the component) */}
//     </>
//   );
// };

// export default Buttons;
