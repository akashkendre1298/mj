import React, { useState } from 'react';

function App() {
  const initialBlackText = 'This is the black text box.\nIt has multiple lines.\nClick on a line to select it.\nClick "Move Down" to move the selected line to the red box.';
  
  const [blackText, setBlackText] = useState(initialBlackText);
  const [redText, setRedText] = useState('This is the red text box.\nIt starts empty.');
  const [selectedLine, setSelectedLine] = useState('');

  const handleLineClick = (line) => {
    setSelectedLine(line);
  };

  const handleMoveDownRedBox = () => {
    if (selectedLine) {
      // Move the selected line to the red text box
      setRedText((prevRedText) => prevRedText + '\n' + selectedLine);

      // Remove the selected line from the black text box
      setBlackText((prevBlackText) => prevBlackText.replace(selectedLine, ''));

      // Clear the selection
      setSelectedLine('');
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        {blackText.split('\n').map((line, index) => (
          <div key={index} onClick={() => handleLineClick(line)} style={{ cursor: 'pointer', backgroundColor: selectedLine === line ? 'gray' : 'black' }}>
            {line}
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
        {redText.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <button onClick={handleMoveDownRedBox}>Move Down</button>
    </div>
  );
}

export default App;
