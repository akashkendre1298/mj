import React, { useState } from "react";
import "./CoverPageDesigner.css";
// CoverPageDesigner component
function CoverPageDesigner() {
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [outputContent, setOutputContent] = useState([]);

  const addObjectToOutput = (objectType, properties) => {
    setOutputContent([...outputContent, { type: objectType, properties }]);
  };

  const updateObjectInOutput = (index, properties) => {
    const updatedOutput = [...outputContent];
    updatedOutput[index].properties = {
      ...updatedOutput[index].properties,
      ...properties,
    };
    setOutputContent(updatedOutput);
  };

  const removeObjectFromOutput = (index) => {
    const updatedOutput = [...outputContent];
    updatedOutput.splice(index, 1);
    setOutputContent(updatedOutput);
  };

  // Function to handle resizing, dragging, etc.

  const handleCheckboxChange = (event, label) => {
    if (event.target.checked) {
      setSelectedObjects([...selectedObjects, label]);
      addObjectToOutput("checkbox", { label: label });
    } else {
      const updatedSelectedObjects = selectedObjects.filter(
        (obj) => obj !== label
      );
      setSelectedObjects(updatedSelectedObjects);
      const updatedOutputContent = outputContent.filter(
        (obj) => obj.properties.label !== label
      );
      setOutputContent(updatedOutputContent);
    }

    // Check which checkbox is clicked and add corresponding functionality
    if (label === "Cover Photo") {
      // Add button to output for "Cover Photo" checkbox
      const buttonComponent = {
        type: "button",
        properties: {
          label: "Cover Photo",
          onClick: () => alert("Button for Cover Photo clicked"),
        },
      };
      addObjectToOutput("button", buttonComponent.properties);
    }
    if (label === "Company Logo") {
      // Add button to output for "Cover Photo" checkbox
      const buttonComponent = {
        type: "button",
        properties: {
          label: "Company Logo",
          onClick: () => alert("Button for Cover Photo clicked"),
        },
      };
      addObjectToOutput("logo", buttonComponent.properties);
    }
    // Add similar functionality for other checkboxes as needed
  };

  return (
    <>
      <div
        className="flex justify-center gap-3 p-2 bg-gray-200"
        // style={{ height: "100vh" }}
      >
        <div className="container-for-Object-and-control-section-for-design-cover-page-grid">
          {/* Objects Column */}
          {/* <p>objects</p> */}{" "}
          <fieldset className="bordered-text">
            <legend className="tag-for-line-draw-through-text">Objects</legend>
            <div className="contains-template-and-design-components-for-cover-page-design-OBJECTS bg-white">
              {/* <h2 className="text-2xl font-bold mb-4">Objects</h2> */}
              {/* Template Components */}
              <fieldset className="bordered-text">
                <legend className="tag-for-line-draw-through-text">
                  Template Components
                </legend>
                <div className="div-contains-all-the-check-boxes-regarding-cover-page">
                  {/* <h3 className="text-lg font-semibold mb-2">Template Components</h3> */}
                  {/* Checkbox for cover photo */}
                  {/* <p>objects</p> */}
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, "Cover Photo")}
                    />
                    Cover Photo
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, " Company Logo")}
                    />
                    Company Logo
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e, "Company Information")
                      }
                    />
                    Company Information
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e, "  Inspection Details")
                      }
                    />
                    Inspection Details
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e, "Agent Information")
                      }
                    />
                    Agent Information
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, "Cover Company")}
                    />
                    Cover Company
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, " Report Title")}
                    />
                    Report Title
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(e, "Inspection Signature")
                      }
                    />
                    Inspection Signature
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, "Agent Photo")}
                    />
                    Agent Photo
                  </label>
                  {/* ... Add more checkboxes for other template components */}
                </div>
              </fieldset>
              {/* Design Components */}
              <fieldset className="bordered-text">
                <legend className="tag-for-line-draw-through-text">
                  Design Components
                </legend>
                <div className="Buttons-and-check-boxes-for-Design-Component-ss">
                  {/* <h3 className="text-lg font-semibold mb-2">Design Components</h3> */}
                  <div className="check-boxes-and-buttons-for-adding-text-box-and-image">
                    <div className="lables-check-boxes-for-page-border-cover-page-stationary">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            handleCheckboxChange(e, "Page Borders")
                          }
                        />
                        Page Borders
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            handleCheckboxChange(e, "Cover Page Stationary")
                          }
                        />
                        Cover Page Stationary
                      </label>
                      <p className="no-stationary-loaded-text-button">
                        No Stationary Loaded
                      </p>
                    </div>
                  </div>
                  <div className="buttons-for-add-text-box-and-imagess">
                    <section className="section-for-btnss-of-text-add-imgs">
                      {/* Buttons for adding box, text, image, etc. */}
                      <button
                        className="btn"
                        onClick={() =>
                          addObjectToOutput("box", {
                            /* box properties */
                          })
                        }
                      >
                        Add Box
                      </button>
                      <button
                        className="btn"
                        onClick={() =>
                          addObjectToOutput("text", {
                            /* text properties */
                          })
                        }
                      >
                        Add Text
                      </button>
                      <button
                        className="btn"
                        onClick={() =>
                          addObjectToOutput("image", {
                            /* image properties */
                          })
                        }
                      >
                        Add Image
                      </button>
                    </section>
                  </div>
                </div>
              </fieldset>
            </div>
          </fieldset>
          <fieldset className="bordered-text">
            <legend className="tag-for-line-draw-through-text">Controls</legend>
            <div className="contains-controls-for-the-design-cover-page">
              {/* Controls Section */}
              <fieldset className="bordered-text">
                <legend className="tag-for-line-draw-through-text">
                  Controls
                </legend>
                <div className="contains-all-the-button-that-appear-in-control-section">
                  {/* <h3 className="text-lg font-semibold mb-2">Controls</h3> */}
                  {/* Controls for attribute */}
                  <button className="btn-for-control-section-design-page">
                    Show Actual <br /> Font Size
                  </button>
                  <button className="btn-for-control-section-design-page">
                    Font Setting
                  </button>
                  <button className="btn-for-control-section-design-page">
                    Color Setting
                  </button>
                  <button className="btn-for-control-section-design-page">
                    Border Style
                  </button>
                  <button className="btn-for-control-section-design-page">
                    Remove <br /> Box/Text/Image
                  </button>
                  {/* ... Add more controls for size and position */}
                </div>
              </fieldset>

              <div className="contains-position-and-size-controls-with-this-div">
                <fieldset className="bordered-text">
                  <legend className="tag-for-line-draw-through-text">
                    Controls
                  </legend>
                  <div className="contains-size-control-for-cover-page-design">
                    Size Control
                  </div>
                </fieldset>{" "}
                <fieldset className="bordered-text">
                  <legend className="tag-for-line-draw-through-text">
                    Controls
                  </legend>
                  <div className="contains-position-control-for-cover-page-design">
                    <section>Movement Shortcut</section>
                    <section>Object Alignment</section>
                    <section>Object Alignment</section>
                  </div>
                </fieldset>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Layering Column */}{" "}
        <fieldset className="bordered-text w-1/4">
          <legend className="tag-for-line-draw-through-text">Layers</legend>
          <div className="contains-the-list-of-selected-objects-and-thier-layer">
            {/* <h2 className="text-2xl font-bold mb-4">Layering</h2> */}
            {/* ... Display the list of selected objects and their layers */}

            <ul>
              {selectedObjects.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>{" "}
        </fieldset>
        {/* Output Column */}
        <div className="w-1/2 border p-4 border-gray-300 relative bg-white all-the-output-screen-with-all-the-changes-reflect-here">
          <h2 className="text-2xl font-bold mb-4">Output</h2>
          {outputContent.map((object, index) => (
            <OutputComponent
              key={index}
              type={object.type}
              properties={object.properties}
              remove={() => removeObjectFromOutput(index)}
            />
          ))}
        </div>
      </div>
      <div className="contains-bottom-section-with-buttons-design-cover-page">
        <div className="buttons-with-apply-export-import-discard-changes-apply">
          <button className="button-for-footer-for-changes-in-cover-page">
            Apply Changes <br /> to Template Template
          </button>{" "}
          <button className="button-for-footer-for-changes-in-cover-page">
            Export Layout to a <br /> File for Future Use
          </button>{" "}
          <button className="button-for-footer-for-changes-in-cover-page">
            Import Layout <br /> from File
          </button>{" "}
          <button className="button-for-footer-for-changes-in-cover-page">
            Discard <br /> Changes
          </button>
        </div>
      </div>
    </>
  );
}
// OutputComponent: A component to render different types of output
function OutputComponent({ type, properties, remove }) {
  switch (type) {
    case "button":
      return (
        <p className="btn" onClick={properties.onClick}>
          {properties.label}
        </p>
      );
    case "Company Logo":
      return (
        <p className="btn" onClick={properties.onClick}>
          {properties.label}
        </p>
      );
    // Add cases for other types of output components
    default:
      return null;
  }
}
// DraggableComponent: A draggable and resizable component for the Output Column
function DraggableComponent({ type, properties, updateObject, remove }) {
  // ... Implement the draggable and resizable logic using state and events
  // return (
  //   <div
  //     className="border p-4 mb-4"
  //     style={{
  //       width: `${properties.width}px`,
  //       height: `${properties.height}px`,
  //       border: properties.border,
  //       // ... Add more styles based on properties (e.g., position)
  //     }}
  //   >
  //     {/* Display the content based on the type */}
  //     {type === "text" && <span className="text-lg">{properties.text}</span>}
  //     {type === "image" && (
  //       <img
  //         src={properties.src}
  //         alt={properties.alt}
  //         className="max-w-full h-auto"
  //       />
  //     )}
  //     {type === "box" && <div className="w-full h-full bg-gray-200"></div>}
  //     {/* ... Add more cases for other object types */}
  //     {/* Add controls for resizing, moving, etc. */}
  //     {/* <button className="btn" onClick={() => updateObject({ fontSize: 16 })}>Show Actual Font Size</button>
  //           <button className="btn" onClick={() => updateObject({ zoom: 1.2 })}>Zoom In</button>
  //           <button className="btn" onClick={() => updateObject({ zoom: 0.8 })}>Zoom Out</button> */}
  //     {/* ... Add more controls as needed */}
  //     <button className="btn" onClick={remove}>
  //       Photo
  //     </button>
  //     <button className="btn" onClick={remove}>
  //       Remove
  //     </button>
  //   </div>
  // );
}

export default CoverPageDesigner;
