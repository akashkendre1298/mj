import React, { useState } from "react";
import "./InsertPdf.css";
import Header from "../Header/Header";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-for-the-confirmation-of-deletion-of-document">
      <p className="mb-4">{message}</p>
      <div className="section-of-cancel-and-confirm-deletion-of-decument">
        <button
          className="btn-for-cancel-and-confirm-insert-pdf-section"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="btn-for-cancel-and-confirm-insert-pdf-section"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const InsertPdf = () => {
  const [selectedPdfs, setSelectedPdfs] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [fileNames, setFileNames] = useState([]);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationIndex, setConfirmationIndex] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newSelectedPdfs = [...selectedPdfs];
      const newPreviewUrls = [...previewUrls];
      const newFileNames = [...fileNames];

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
          newFileNames.push(file.name);
        } else {
          alert(`File ${file.name} is not a valid PDF.`);
        }
      }

      setSelectedPdfs([...newSelectedPdfs]);
      setFileNames([...newFileNames]);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };
  const handleRemovePdf = (index) => {
    setConfirmationIndex(index);
    console.log("button clicked");
    setShowConfirmation(true);
  };

  const handleConfirmRemove = () => {
    if (confirmationIndex !== null) {
      const newSelectedPdfs = [...selectedPdfs];
      const newPreviewUrls = [...previewUrls];
      const newFileNames = [...fileNames];

      newSelectedPdfs.splice(confirmationIndex, 1);
      newPreviewUrls.splice(confirmationIndex, 1);
      newFileNames.splice(confirmationIndex, 1);

      setSelectedPdfs(newSelectedPdfs);
      setPreviewUrls(newPreviewUrls);
      setFileNames(newFileNames);

      // Close the confirmation modal
      setShowConfirmation(false);
      // Reset confirmation index to null
      setConfirmationIndex(null);
    }
  };

  const handleCancelRemove = () => {
    // Close the confirmation modal
    setShowConfirmation(false);
    // Reset confirmation index to null
    setConfirmationIndex(null);
  };

  return (
    <>
      <div>
        <Header />
      </div>{" "}
      <div className="add-remove-pdf-docs-and-arrange-documents-section">
        <div className="for-first-section-header-and-the-btns">
          <p className="add-remove-header-text-for-section">
            Add/Remove PDF Documents
          </p>
          <div className="header-and-add-doc-add-form-btns">
            <div className="two-btns-for-add-pdf-and-forms">
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
              <label
                htmlFor="fileInput"
                className="add-doc-btn-for-section-document"
              >
                Add Form
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {/* <button className="add-doc-btn-for-section-form">Add Form</button> */}
            </div>
            <div className="uploaded-documents-preview">
              {selectedPdfs.map((pdf, index) => (
                <div className="pdf-preview-for-multiple-files" key={index}>
                  <div className="pdw-preview-with-name-of-pdf flex items-center">
                    <embed
                      src={previewUrls[index]}
                      type="application/pdf"
                      width="200"
                      height="150"
                      className="overflow-y-hidden overflow-x-hidden"
                    />

                    <h2>{fileNames[index]}</h2>
                  </div>
                  {showConfirmation && (
                    <ConfirmationModal
                      message={`Are you sure you want to remove this document from your inspection file ?
                    You can select 'Dont Print' if you don't want the document to be printed in the report ${fileNames[confirmationIndex]}?`}
                      onConfirm={handleConfirmRemove}
                      onCancel={handleCancelRemove}
                    />
                  )}
                  <div className="check-boxes-and-remove-button">
                    <form className="form-for-check-box-and-search-box">
                      <label>
                        <input type="checkbox" />
                        Don't Print
                      </label>
                      <label>
                        <input type="checkbox" />
                        Save To Template
                      </label>
                      <label>
                        <input type="checkbox" />
                        Ignore Page Margins
                      </label>
                      <label>
                        <input type="checkbox" />
                        Bookmark
                      </label>
                      <input
                        name="fsrch"
                        className="bookmark-name-input-box-ss"
                        placeholder="<<Bookmark Name>>"
                      ></input>
                    </form>
                    <button onClick={() => handleRemovePdf(index)}>
                      Remove <br /> Document
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
