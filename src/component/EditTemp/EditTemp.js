
import React from 'react';
import { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import './EditTemp.css';
import { Link } from 'react-router-dom';

const EditTemp = ({ onClose }) => {
    // State variables
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [newItemName, setNewItemName] = useState('');
    const [menuName, setMenuName] = useState('');
    const [menuItem, setMenuItem] = useState('');
    const [items, setItems] = useState([]);

    const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(null);
    const [selectedSubItemIndex, setSelectedSubItemIndex] = useState(null);
    const [lastSelectionType, setLastSelectionType] = useState('menu'); // 'menu' or 'menuItem'
    const [selectedMenuTitleIndex, setSelectedMenuTitleIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const [menuItems, setMenuItems] = useState([]);

    // Function to handle adding text
    const handleAddClick = () => {
        setDisplayText(inputText);
        setInputText('');
    };

    // Function to handle input change for new item name
    const handleInputChange = (event) => {
        setNewItemName(event.target.value);
    };

    // Function to handle input change for menu item
    const handleMenuItemChange = (event) => {
        setMenuItem(event.target.value);
    };

    // Function to handle selecting a menu item
    const handleSelectMenuItem = (index) => {
        setSelectedMenuItemIndex(index);
        setLastSelectionType(index === null ? 'menu' : 'menuItem');
        setShowPopup(true);
    };

    // Function to handle selecting a subitem
    const handleSelectSubItem = (subIndex) => {
        setSelectedSubItemIndex(subIndex);
        setShowPopup(true);
    };

    // Function to handle selecting a menu title
    const handleSelectMenuTitle = (index) => {
        setSelectedMenuTitleIndex(index);
        setSelectedMenuItemIndex(null);
        setSelectedSubItemIndex(null);
    };

    // Function to handle adding a menu item or subitem
    const handleAddMenuItem = (event) => {
        event.preventDefault();

        if (lastSelectionType === 'menu' && selectedMenuTitleIndex !== null) {
            // Add a new menu item
            setItems((prevItems) => {
                const updatedItems = [...prevItems];
                updatedItems[selectedMenuTitleIndex] = {
                    ...updatedItems[selectedMenuTitleIndex],
                    name: menuItem,
                    subItems: [],
                };
                return updatedItems;
            });

            setMenuItem('');
            setLastSelectionType('menuItem');
        } else if (lastSelectionType === 'menuItem' && selectedMenuItemIndex !== null) {
            // Add a new subitem to a menu item
            const selectedItem = items[selectedMenuItemIndex];
            if (!selectedItem.subItems.includes(menuItem)) {
                setItems((prevItems) => {
                    const updatedItems = [...prevItems];
                    updatedItems[selectedMenuItemIndex] = {
                        ...selectedItem,
                        subItems: [...selectedItem.subItems, menuItem],
                    };
                    return updatedItems;
                });
                setMenuItem('');
            }
        } else {
            // Add a new menu if none selected
            const newItem = { name: menuItem, subItems: [] };
            setItems((prevItems) => [...prevItems, newItem]);
            setMenuItem('');
            setLastSelectionType('menu');
        }
    };

    // State variable for controlling popup visibility
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Function to handle double click
    const handleDoubleClick = (index) => {
        setSelectedMenuItemIndex(index);
        setPopupVisible(true);
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    // Function to handle OK button click in the popup
    const handleOkButtonClick = () => {
        setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === selectedMenuItemIndex.id ? { ...item, name: newItemName } : item
        )
      );
        setPopupVisible(false);
    };

    // Function to handle removing a menu item or subitem
const handleRemoveItem = () => {
    if (lastSelectionType === 'menu' && selectedMenuTitleIndex !== null) {
        // Remove a menu item
         
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(selectedMenuTitleIndex, 1);
            return updatedItems;
        });
    } else if (lastSelectionType === 'menuItem' && selectedMenuItemIndex !== null) {
        // Remove a subitem from a menu item
        const selectedItem = items[selectedMenuItemIndex];
        const updatedSubItems = selectedItem.subItems.filter((_, index) => index !== selectedSubItemIndex);

        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[selectedMenuItemIndex] = {
                ...selectedItem,
                subItems: updatedSubItems,
            };
            return updatedItems;
        });
    }
    // Additional logic for other cases if needed
};

    



    // JSX for rendering the component
    return (
        <div className='Contant-edittemp'>
            {/* Template Card */}
            <div className='template-card-edittemp'>
                {/* Template Selector */}
                <div className="template-selector-edittemp">
                    <span className='selectTemp-edittemp'>Edit Template</span>
                    <div className='close-div-edittemp'>
                        <button onClick={onClose} className="close-button-edittemp">X</button>
                    </div>
                </div>

                {/* Menu and Item Section */}
                <div className='Menu-Item'>
                    {/* Menu Section */}
                    <div className='menu-edittemp'>
                    </div>
                        <p className='menutitle-edittemp'>Menu</p>
                    {/* Item Section */}
                    <div className='item'>
                        <p className='itemtitle-edittemp'>Item</p>
                    </div>
                </div>

                {/* Menu Items */}
                <div className='Menu-Item-edittemp'>
                    {/* Menu Box */}
                    <div className="template-card__body__center__input-edittemp">
                        <div className="box-edittemp">
                            <div className='menubox'>
                                {/* Icon for Opening Folder */}
                                <div className='iconmenu-edittemp'>
                                    <div>
                                        <FaFolderOpen className='mr-2 inline-block' size={18} />
                                    </div>
                                    {/* Menu Title */}
                                    <div
                                        className={`Menu-Item ${selectedMenuTitleIndex === null ? 'selected-menu-title' : ''}`}
                                        onClick={() => handleSelectMenuTitle(null)}
                                    >
                                        <p
                                            className="menutitle1-edittemp"
                                            value={menuName}
                                            onChange={handleMenuItemChange}
                                            style={{ cursor: 'pointer', backgroundColor: '#f0f0f0' }}
                                        >
                                            MENU
                                        </p>
                                    </div>
                                </div>

                                {/* Menu Items List */}
                                <div key={selectedMenuItemIndex}>
                                    <ul>
                                        {/* Render Menu Items */}
                                        {items.map((item, index) => (
                                            <li key={index}>
                                                {/* Menu Item Button */}
                                                <button
                                                    onDoubleClick={() => handleDoubleClick(index)}
                                                    className={`Menu-Item ${selectedMenuItemIndex === index ? 'clicked' : ''}`}
                                                    onClick={() => handleSelectMenuItem(index)}
                                                    style={{
                                                        backgroundColor: selectedMenuItemIndex === index ? '#b3e0ff' : 'transparent',
                                                    }}
                                                >
                                                    {item.name}{' '}
                                                </button>

                                                {/* Popup for Renaming Menu Item */}
                                                {isPopupVisible && index === selectedMenuItemIndex && (
                                                    <div className='Contant1-edittemp'>
                                                        <div className='template-card1-edittemp'>
                                                            {/* Popup Header */}
                                                            <div className="template-selector1">
                                                                <span className='selectTemp1-edittemp'>Select A Template</span>
                                                                <button className="close-button1-edittemp" onClick={handleClosePopup}>X</button>
                                                            </div>
                                                            {/* Popup Content */}
                                                            <div className='para2-edittemp'>
                                                                <p>Enter new name of menu item</p>
                                                                <input type="text" value={newItemName} onChange={handleInputChange} className="menutext1-edittemp" />
                                                            </div>
                                                            {/* Popup Buttons */}
                                                            <div className="button-container1-edittemp">
                                                                <button className="ok-button-edittemp" onClick={handleOkButtonClick}>Ok</button>
                                                                <button className="cancel-button1-edittemp" onClick={handleClosePopup}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Render SubItems if Exist */}
                                                {item.subItems.length > 0 && (
                                                    <ul>
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <li
                                                                key={subIndex}
                                                                className={`${selectedSubItemIndex === subIndex ? 'selected-subitem-edittemp' : ''}`}
                                                            >
                                                                {/* SubItem Button */}
                                                                <button
                                                                    onClick={() => handleSelectSubItem(subIndex)}
                                                                    style={{
                                                                        backgroundColor: selectedSubItemIndex === subIndex ? '#c2f0c2' : 'transparent',
                                                                    }}
                                                                >
                                                                    {subItem}
                                                                </button>

                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Additional Item Content Placeholder */}
                        <div className="box2-edittemp">
                            <div className='item'>
                                {/* Placeholder for additional item content */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button Containers */}
                <div className='Menu-Item-edittemp'>
                    {/* Menu Item Manipulation Buttons */}
                    <div className="button-container-edittemp">
                        <div className="input-container-edittemp">
                            <input
                                type="text"
                                className="custom-input-edittemp"
                                placeholder="Text..."
                                value={menuItem}
                                onChange={handleMenuItemChange}
                            />
                            <button className="btnM-edittemp" onClick={(e) => handleAddMenuItem(e)}>
                                Add
                            </button>
                            <button className="btnM-edittemp" onClick={handleRemoveItem}>
                    Remove
                </button>
                            <button className="btnM-edittemp">Copy</button>
                        </div>
                    </div>
                    {/* Item Manipulation Buttons */}
                    <div className="button-container-edittemp">
                        <div className="input-container-edittemp">
                            
                            <button className="btnM-edittemp">Add</button>
                      
                            <button className="btnM-edittemp">Remove</button>
                            <button className="btnM-edittemp">Move Up</button>
                            <button className="btnM-edittemp">Move Down</button>
                            <button className="btnM-edittemp">Copy</button>
                        </div>
                    </div>
                </div>

                {/* Explanation Paragraph */}
                <div className='para1-edittemp'>
                    <p>Double click on a menu or inspection item to rename it. Move a menu by dragging and dropping an item to the new location Type into the box left of Add and click Add to add a new area or menu</p>
                </div>

                {/* Done Button */}
                <div className="Donebtn-edittemp">
                    <button className="open-button-edittemp">Done</button>
                </div>
            </div>
        </div>
    );

};

export default EditTemp;