import React, { useState } from 'react';

// CoverPageDesigner component
function CoverPageDesigner() {
    const [selectedObjects, setSelectedObjects] = useState([]);
    const [outputContent, setOutputContent] = useState([]);

    const addObjectToOutput = (objectType, properties) => {
        setOutputContent([...outputContent, { type: objectType, properties }]);
    };

    const updateObjectInOutput = (index, properties) => {
        const updatedOutput = [...outputContent];
        updatedOutput[index].properties = { ...updatedOutput[index].properties, ...properties };
        setOutputContent(updatedOutput);
    };

    const removeObjectFromOutput = (index) => {
        const updatedOutput = [...outputContent];
        updatedOutput.splice(index, 1);
        setOutputContent(updatedOutput);
    };

    // Function to handle resizing, dragging, etc.

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            // If "Cover Photo" checkbox is checked, add a box to the output
            addObjectToOutput('box', {
                width: 200,
                height: 100,
                border: '1px solid black',
            });
        }
    };

    return (
        <div className="flex justify-between p-6 bg-gray-200 " style={{ height: "94vh" }}>
            {/* Objects Column */}
            <div className="w-1/3 bg-white p-4">
                <h2 className="text-2xl font-bold mb-4">Objects</h2>
                {/* Template Components */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Template Components</h3>
                    {/* Checkbox for cover photo */}
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
                        Cover Photo
                    </label>
                    {/* ... Add more checkboxes for other template components */}
                </div>
                {/* Design Components */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Design Components</h3>
                    {/* Buttons for adding box, text, image, etc. */}
                    <button className="btn" onClick={() => addObjectToOutput('box', { /* box properties */ })}>Add Box</button>
                    <button className="btn" onClick={() => addObjectToOutput('text', { /* text properties */ })}>Add Text</button>
                    <button className="btn" onClick={() => addObjectToOutput('image', { /* image properties */ })}>Add Image</button>
                    {/* ... Add more buttons for other design components */}
                </div>
                {/* Controls Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Controls</h3>
                    {/* Controls for attribute */}
                    <button className="btn">Show Actual Font Size</button>
                    <button className="btn">Font Setting</button>
                    <button className="btn">Color Setting</button>
                    <button className="btn">Border Style</button>
                    <button className="btn">Remove Box/Text/Image</button>
                    {/* ... Add more controls for size and position */}
                </div>
            </div>

            {/* Layering Column */}
            <div className="w-1/3 bg-white p-4">
                <h2 className="text-2xl font-bold mb-4">Layering</h2>
                {/* ... Display the list of selected objects and their layers */}
            </div>

            {/* Output Column */}
            <div className="w-1/3 border border-gray-300 p-4 relative bg-white">
                <h2 className="text-2xl font-bold mb-4">Output</h2>
                {outputContent.map((object, index) => (
                    <DraggableComponent
                        key={index}
                        type={object.type}
                        properties={object.properties}
                        updateObject={(newProperties) => updateObjectInOutput(index, newProperties)}
                        remove={() => removeObjectFromOutput(index)}
                    />
                ))}
            </div>
        </div>
    );
}

// DraggableComponent: A draggable and resizable component for the Output Column
function DraggableComponent({ type, properties, updateObject, remove }) {
    // ... Implement the draggable and resizable logic using state and events

    return (
        <div
            className="border p-4 mb-4"
            style={{
                width: `${properties.width}px`,
                height: `${properties.height}px`,
                border: properties.border,
                // ... Add more styles based on properties (e.g., position)
            }}
        >
            {/* Display the content based on the type */}
            {type === 'text' && <span className="text-lg">{properties.text}</span>}
            {type === 'image' && <img src={properties.src} alt={properties.alt} className="max-w-full h-auto" />}
            {type === 'box' && <div className="w-full h-full bg-gray-200"></div>}
            {/* ... Add more cases for other object types */}

            {/* Add controls for resizing, moving, etc. */}
            {/* <button className="btn" onClick={() => updateObject({ fontSize: 16 })}>Show Actual Font Size</button>
            <button className="btn" onClick={() => updateObject({ zoom: 1.2 })}>Zoom In</button>
            <button className="btn" onClick={() => updateObject({ zoom: 0.8 })}>Zoom Out</button> */}
            {/* ... Add more controls as needed */}

            <button className="btn" onClick={remove}>Remove</button>
        </div>
    );
}

export default CoverPageDesigner;
