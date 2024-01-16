import React, { useState, useEffect } from 'react';

function LocalStorage() {
  // State to manage form data
  const [formData, setFormData] = useState({ name: '', email: '' });

  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // Function to handle form submission
  const submitForm = () => {
    // Update table data with new form data
    setTableData([...tableData, formData]);

    // Reset form data
    setFormData({ name: '', email: '' });
  };

  // Update local storage whenever tableData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(tableData));
  }, [tableData]);

  // Function to update the table when the component mounts
  useEffect(() => {
    // Load existing data from localStorage on component mount
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    setTableData(existingData);
    console.log(existingData)
}, []); // Empty dependency array means this effect runs once on mount

const clearStorage = () => {
  // Clear both form data and table data from local storage
  localStorage.removeItem('formData');
  setTableData([]);
  setFormData({ name: '', email: '' });
};


  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <br />

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
              <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearStorage}>Clear LocalStorage</button>
    </div>
  );
}

export default LocalStorage;
