import React from "react";
import "./InsertPdf.css";
import Header from "../Header/Header";

const InsertPdf = () => {
  return (
    <>
      <div>
        {/* Calling Header */}
        <Header />
      </div>
      <div className="add-remove-pdf-docs-and-arrange-documents-section flex-row">
        <p className="add-remove-header-text-for-section">
          Add/Remove PDF Documents
        </p>
        <div className="for-first-section-header-and-the-btns">
          <div className="header-and-add-doc-add-form-btns">
            <div className="two-btns-for-add-pdf-and-forms mt-10">
              <button className="add-doc-btn-for-section bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                Add Document
              </button>{" "}
              <button className="add-doc-btn-for-section bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
                Add Form
              </button>
            </div>
          </div>
        </div>
        <div className="arrange-document-list-right-side-section">
          <p className="arrgane-document-header-for-section">
            Arrange Document
          </p>
          <div className="list-for-the-documents-in-the-section">
            <ul class="list-disc">
              <li>One Item</li>
              {/* <!-- ... --> */}
            </ul>

            <ol class="list-decimal">
              <li>One Item</li>
              {/* <!-- ... --> */}
            </ol>

            <ul class="list-none">
              <li>One Item</li>
              {/* <!-- ... --> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertPdf;
