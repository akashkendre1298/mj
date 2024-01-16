import React, { useState } from "react";
import "./InsertPdf.css";
import Header from "../Header/Header";
import listicon from "../../Assets/icons/status_online.png";
const InsertPdf = () => {
  const [selectedPdfs, setSelectedPdfs] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newSelectedPdfs = [...selectedPdfs];
      const newPreviewUrls = [...previewUrls];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type === "application/pdf") {
          const reader = new FileReader();

          reader.onloadend = () => {
            newPreviewUrls.push(reader.result);
            setPreviewUrls([...newPreviewUrls]);
          };

          reader.readAsDataURL(file);
          newSelectedPdfs.push(file);
        } else {
          // Handle invalid file type
          alert(`File ${file.name} is not a valid PDF.`);
        }
      }

      setSelectedPdfs([...newSelectedPdfs]);
    }
  };
  const handleButtonClick = () => {
    // Trigger the file input click
    document.getElementById("fileInput").click();
  };
  return (
    <>
      <div>
        {/* Calling Header */}
        <Header />
      </div>
      <div className="add-remove-pdf-docs-and-arrange-documents-section">
        <div className="for-first-section-header-and-the-btns">
          <p className="add-remove-header-text-for-section">
            Add/Remove PDF Documents
          </p>
          <div className="header-and-add-doc-add-form-btns">
            <div className="two-btns-for-add-pdf-and-forms mt-10">
              {/* <button className="add-doc-btn-for-section-document">
                Add Document
              </button> */}
              <label
                htmlFor="fileInput"
                className="add-doc-btn-for-section-document"
              >
                Add Document
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button className="add-doc-btn-for-section-form">Add Form</button>
            </div>
            <div className="uploaded-documents-preview">
              {selectedPdfs.map((pdf, index) => (
                <div className="pdf-preview-for-multiple-files" key={index}>
                  {/* <h2>PDF Preview {index + 1}</h2> */}
                  <embed
                    src={previewUrls[index]}
                    type="application/pdf"
                    width="200"
                    height="100"
                  />
                </div>
              ))}
            </div>
            {/* <button onClick={handleButtonClick}>Choose File</button> */}
          </div>
        </div>
        <div className="arrange-document-list-right-side-section">
          <p className="arrgane-document-header-for-section">
            Arrange Document
          </p>
          <div className="list-for-the-documents-in-the-section">
            <h1>List with Green Icons</h1>
            <ul className="nested-list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>
                Item 3
                <ul className="nested-list">
                  <li>Subitem 3.1</li>
                  <li>Subitem 3.2</li>
                  <li>
                    Subitem 3.3
                    <ul className="nested-list">
                      <li>Sub-subitem 3.3.1</li>
                      <li>Sub-subitem 3.3.2</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Item 4</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertPdf;
