import React, { useRef, useState } from "react";
import "./Header.css";
import OpenTemp from "../OpenTemp/OpenTemp";
import EditTemp from "../EditTemp/EditTemp";
import SaveTemp from "../SaveTemp/SaveTemp";
import img1 from "../../Assets/icons/open_inspection.png";
import img2 from "../../Assets/icons/save_inspection.png";
import img3 from "../../Assets/icons/open_template.png";
import img4 from "../../Assets/icons/save_template.png";
import img5 from "../../Assets/icons/edit_comments.png";
import img6 from "../../Assets/icons/edit_template.png";
import img7 from "../../Assets/icons/pdf.png";
import img8 from "../../Assets/icons/client_info.png";
import img9 from "../../Assets/icons/contract_page.png";
import img10 from "../../Assets/icons/copy.png";
import img11 from "../../Assets/icons/paste.png";
import img12 from "../../Assets/icons/generate_report.png";
import img13 from "../../Assets/icons/upload_report.png"; // Import your EditTemplate component
import { Link } from "react-router-dom";

const Header = () => {
  const [openTemplatePopup, setOpenTemplatePopup] = useState(false);
  const [saveTemplatePopup, setSaveTemplatePopup] = useState(false);
  const [editTemplatePopup, setEditTemplatePopup] = useState(false);

  const openOpenTemplatePopup = () => {
    setOpenTemplatePopup(true);
  };

  const closeOpenTemplatePopup = () => {
    setOpenTemplatePopup(false);
  };

  const openSaveTemplatePopup = () => {
    setSaveTemplatePopup(true);
  };

  const closeSaveTemplatePopup = () => {
    setSaveTemplatePopup(false);
  };

  const openEditTemplatePopup = () => {
    setEditTemplatePopup(true);
  };

  const closeEditTemplatePopup = () => {
    setEditTemplatePopup(false);
  };

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenInspectionClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveInspectionClick = () => {
    if (selectedFile) {
      // Perform save operation using the selectedFile
      console.log("Saving inspection with file:", selectedFile);
      // Reset the selectedFile state after saving
      setSelectedFile(null);
    } else {
      // Inform the user that no file is selected
      console.log("Please select a file for inspection.");
    }
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (

    <>


      <div className="dropdown-container flex">
        <div className="menu-item relative ml-4">
          <div
            className="main-label cursor-pointer"
            onClick={() => handleMenuClick(0)}
          >
            File
          </div>
          {activeMenu === 0 && (
            <ul className="submenu absolute z-10 bg-white shadow mt-2">
              <li className="py-2 px-4 hover:bg-gray-200">Open Inspection</li>
              <li className="py-2 px-4 hover:bg-gray-200">Save Inspection</li>
              <li className="py-2 px-4 hover:bg-gray-200">Open Template</li>
              <li className="py-2 px-4 hover:bg-gray-200">Save Template</li>
            </ul>
          )}
        </div>

        <div className="menu-item relative ml-4">
          <div
            className="main-label cursor-pointer"
            onClick={() => handleMenuClick(1)}
          >
            Photos
          </div>
          {activeMenu === 1 && (
            <ul className="submenu absolute z-10 bg-white shadow mt-2">
              <Link to="/photoreview">
                <li className="py-2 px-4 hover:bg-gray-200">Add Review Photos</li>
              </Link>
              <li className="py-2 px-4 hover:bg-gray-200">Batch Add Photos</li>
              <li className="py-2 px-4 hover:bg-gray-200">Clear All Photos</li>
            </ul>
          )}
        </div>
      </div>

      <div className="header">
        <nav>
          <ul className="uordered-list-in-header-section">
            <li className="list-for-header-section-main-nav">
              <a href="#file" onClick={handleOpenInspectionClick}>
                <img src={img1} alt="" />
                <div>Open Inspection</div>
              </a>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </li>
            <li className="list-for-header-section-main-nav">
              <a href="#edit" onClick={handleSaveInspectionClick}>
                <img src={img2} alt="" />
                <div>Save Inspection</div>
              </a>
            </li>
            <hr />
            <li className="list-for-header-section-main-nav">
              <a href="#" onClick={openOpenTemplatePopup}>
                <img src={img3} alt="" />
                <div>
                  Open
                  <br /> Template
                </div>
              </a>
            </li>
            <li className="list-for-header-section-main-nav">
              <a href="#report-settings" onClick={openSaveTemplatePopup}>
                <img src={img4} alt="" />
                <div>
                  Save
                  <br /> Template
                </div>
              </a>
            </li>
            <hr />
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img5} alt="" />
                <div>
                  Edit <br />
                  Comments
                </div>
              </a>
            </li>
            <li className="list-for-header-section-main-nav">
              <a href="#" onClick={openEditTemplatePopup}>
                <img src={img6} alt="" />
                <div>
                  Edit <br />
                  Template
                </div>
              </a>
            </li>
            <Link to="/insertpdf">
              <li className="list-for-header-section-main-nav">
                <a href="#">
                  <img src={img7} alt="" />
                  <div>
                    Insert PDF <br /> Documments
                  </div>
                </a>
              </li>
            </Link>
            <hr />
            <Link to="/">
              <li className="list-for-header-section-main-nav">
                <a href="#">
                  <img src={img8} alt="" />
                  <div>
                    Client
                    <br /> Info
                  </div>
                </a>
              </li>
            </Link>

            <Link to="/book">
              <li className="list-for-header-section-main-nav">
                <a href="#">
                  <img src={img8} alt="" />
                  <div>
                    Address
                    <br /> Book
                  </div>
                </a>
              </li>
            </Link>
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img9} alt="" />
                <div>
                  Contact
                  <br /> Page
                </div>
              </a>
            </li>
            <hr />
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img10} alt="" />
                <div>Copy</div>
              </a>
            </li>
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img11} alt="" />
                <div>Paste</div>
              </a>
            </li>
            <hr />
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img12} alt="" />{" "}
                <div>
                  Geneate
                  <br /> report
                </div>
              </a>
            </li>
            <hr />
            <li className="list-for-header-section-main-nav">
              <a href="#">
                <img src={img13} alt="" />{" "}
                <div>
                  Upload
                  <br /> report
                </div>
              </a>
            </li>
            <hr />
          </ul>
        </nav>
        {openTemplatePopup && (
          <div className="popup">
            {/* Render your OpenTemplate component here */}
            <OpenTemp onClose={closeOpenTemplatePopup} />
          </div>
        )}

        {saveTemplatePopup && (
          <div className="popup">
            {/* Render your OpenTemplate component here */}
            <SaveTemp onClose={closeSaveTemplatePopup} />
          </div>
        )}

        {editTemplatePopup && (
          <div className="popup m-0">
            {/* Render your EditTemplate component here */}
            <EditTemp onClose={closeEditTemplatePopup} />
          </div>
        )}
      </div>

    </>
  );
};

export default Header;
