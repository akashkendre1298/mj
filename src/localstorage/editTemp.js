// Define the structure of the Persons table without specific data
var editTemp = [
    { columnName: 'EditTempID', dataType: 'int' },
    { columnName: 'Menu', dataType: 'varchar(255)' },
    { columnName: 'SubMenu', dataType: 'varchar(255)' },
    { columnName: 'OneDamagePanel', dataType: 'varchar(255)' },
    { columnName: 'TwoDamagePanel', dataType: 'varchar(255)' },
    { columnName: 'OneSelectionPanel', dataType: 'varchar(255)' },
    { columnName: 'TwoSelectionPanel', dataType: 'varchar(255)' }
];

// Serialize the table structure to a JSON string and store it in localStorage
localStorage.setItem('editTemp', JSON.stringify(editTemp));

// Retrieve the JSON string from localStorage and parse it back to an object
var retrievededitTemp = JSON.parse(localStorage.getItem('editTemp'));

// Now retrievededitTemp is an array with the table structure
console.log(retrievededitTemp);
