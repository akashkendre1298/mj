import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPalette = () => {
    const [rowColors, setRowColors] = useState([
        { id: 1, border: '#ff0000', headerBackground: '#00ff00', footerBackground: '#0000ff', tocBackground: '#ffff00' },
        { id: 2, border: '#ff0000', headerBackground: '#00ff00', footerBackground: '#0000ff', tocBackground: '#ffff00' },
        { id: 3, border: '#ff0000', headerBackground: '#00ff00', footerBackground: '#0000ff', tocBackground: '#ffff00' },
        // Add more rows as needed
    ]);

    const handleColorChange = (id, column, color) => {
        setRowColors((prevColors) =>
            prevColors.map((row) => (row.id === id ? { ...row, [column]: color } : row))
        );
    };

    const handleClose = () => {
        // Handle close logic here
    };

    const dummyData = [
        { id: 1, sectionName: 'Bedroom', sectionTitleFont: '', headerFont: '', footerFont: '', sectionIcon: '', tocFont: '' },
        { id: 2, sectionName: 'Kitchen', sectionTitleFont: '', headerFont: '', footerFont: '', sectionIcon: '', tocFont: '' },
        { id: 3, sectionName: 'Laundry', sectionTitleFont: '', headerFont: '', footerFont: '', sectionIcon: '', tocFont: '' },
        // Add more dummy data as needed
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg" style={{ width: '90%' }}>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Color Palette Settings</span>
                    <span className="cursor-pointer" onClick={handleClose}>
                        X
                    </span>
                </div>
                <div className="flex">
                    <div className=" ">
                        <table className="w-full border-collapse" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th className="border p-2" >Section name</th>
                                    <th className="border p-2" >Section title font</th>
                                    <th className="border p-2">Print</th>
                                    <th className="border p-2 color-column" >Border</th>
                                    <th className="border p-2 color-column" >Header Background</th>
                                    {/* <th className="border p-2" >Header Font</th> */}
                                    <th className='border p-2'>Header Font</th>
                                    <th className="border p-2 color-column" >Footer Background</th>
                                    <th className="border p-2 ">Footer Font</th>
                                    <th className="border p-2" >Section Icon</th>
                                    <th className="border p-2 color-column" >TOC background</th>
                                    <th className="border p-2" >TOC Font</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="border p-2" >{data.sectionName}</td>
                                        {/* <td className="border p-2" >
                                            <input type="text" value={data.sectionTitleFont} onChange={(e) => { }} />
                                        </td> */}
                                        <td className='border p-2'></td>
                                        <td className="border p-2" >
                                            <input type="checkbox" checked={data.print} onChange={() => {/* Handle change */ }} />
                                        </td>
                                        <td className="border p-2" >
                                            <input
                                                type="color"
                                                id={`border_color_${index}`}
                                                name={`border_color_${index}`}
                                                value={rowColors[index].border}
                                                onChange={(e) => handleColorChange(data.id, 'border', e.target.value)}
                                            />
                                        </td>
                                        <td className="border p-2" >
                                            <input
                                                type="color"
                                                id={`header_bg_color_${index}`}
                                                name={`header_bg_color_${index}`}
                                                value={rowColors[index].headerBackground}
                                                onChange={(e) => handleColorChange(data.id, 'headerBackground', e.target.value)}
                                            />
                                        </td>
                                        {/* <td className="border p-2" >
                                            <input type="text" value={data.headerFont} onChange={(e) => {}} />
                                        </td> */}
                                        <td className='border p-2'></td>
                                        <td className="border p-2" >
                                            <input
                                                type="color"
                                                id={`footer_bg_color_${index}`}
                                                name={`footer_bg_color_${index}`}
                                                value={rowColors[index].footerBackground}
                                                onChange={(e) => handleColorChange(data.id, 'footerBackground', e.target.value)}
                                            />
                                        </td>
                                        {/* <td className="border p-2" >
                                            <input type="text" value={data.footerFont} onChange={(e) => { }} />
                                        </td> */}
                                        {/* footer font  */}
                                        <td className='border p-2'></td>
                                        {/* <td className="border p-2" >
                                            <input type="text" value={data.sectionIcon} onChange={(e) => {}} />
                                        </td> */}
                                        <td className='border p-2'></td>
                                        <td className="border p-2" >
                                            <input
                                                type="color"
                                                id={`toc_bg_color_${index}`}
                                                name={`toc_bg_color_${index}`}
                                                value={rowColors[index].tocBackground}
                                                onChange={(e) => handleColorChange(data.id, 'tocBackground', e.target.value)}
                                            />
                                        </td>
                                        {/* <td className="border p-2">
                                            <input type="text" value={data.tocFont} onChange={(e) => { }} />
                                        </td> */}
                                        <td className='border p-2'></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-1/4">
                        {/* Add any content for the 1/4 width box */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ColorPalette;
