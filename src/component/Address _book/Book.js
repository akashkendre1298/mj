import React, { useState } from 'react'
import './Book.css'

const Book = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [company, setCompany] = useState('')
    const [workphone, setWorkphone] = useState('');
    const [workfax, setWorkfax] = useState('');
    const [homephone, setHomephone] = useState('')
    const [homefax, setHomefax] = useState('')
    const [cellphone, setCellphone] = useState('')
    const [pager, setPager] = useState('')
    const [address, setAddress] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('')
    const [postalcode, setPostalcode] = useState('');
    const [country, setCountry] = useState('');
    const [isn, setISN] = useState('');
    const [hip, setHIP] = useState('');
    const [nxt, setNxt] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [notes, setNotes] = useState('');
    const [agents, setAgents] = useState([]);

    const addAgent = () => {
        const newAgent = {
            firstName,
            lastName,
            company,
            workphone,
        };
        setAgents([newAgent, ...agents]);  

        setFirstName('');
        setLastName('');
        setCompany('');
        setWorkphone('');
        // ... (clear other fields if needed)
    };


    const deleteAgent = (index) => {
        const updatedAgents = [...agents];
        updatedAgents.splice(index, 1);
        setAgents(updatedAgents);
    };

    return (
        <>
            <div className="home">
                <div className="main-container">
                    <form className='formcont' onSubmit={(e) => { e.preventDefault(); addAgent(); }}>
                        <h1 className="text">Real Estate Agent Information</h1>
                        <div className="form-group">
                            <label htmlFor="inputlastname" className="label">
                                Agent Last Name:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputlastname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <label htmlFor="inputfirstname" className="label" style={{ width: '13%', textAlign: 'center' }} >
                                First :
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputfirstname"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputcompany" className="label">
                                Company:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputcompany"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputworkphone" className="label">
                                Work Phone:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputworkphone"
                                value={workphone}
                                onChange={(e) => setWorkphone(e.target.value)}
                            />

                            <label htmlFor="inputworkfax" className="label" style={{ width: '13%', textAlign: 'center' }} >
                                Work Fax:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputworkfax"
                                value={workfax}
                                onChange={(e) => setWorkfax(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputhomephone" className="label">
                                Home Phone:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputhomephone"
                                value={homephone}
                                onChange={(e) => setHomephone(e.target.value)}
                            />

                            <label htmlFor="inputworkfax" className="label" style={{ width: '13%', textAlign: 'center' }} >
                                Home Fax:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputhomefax"
                                value={homefax}
                                onChange={(e) => setHomefax(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputcellphone" className="label">
                                Cell Phone:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputcellphone"
                                value={cellphone}
                                onChange={(e) => setCellphone(e.target.value)}
                            />
                            <label htmlFor="inputpager" className="label" style={{ width: '13%', textAlign: 'center' }}>
                                Pager:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputpager"
                                value={pager}
                                onChange={(e) => setPager(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputaddress" className="label">
                                Address:
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputaddress"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="inputaddress2" className="label">
                                Address (Line 2):
                            </label>
                            <input
                                type="text"
                                className="input-for-form"
                                id="inputaddress2"
                                value={addressLine2}
                                onChange={(e) => setAddressLine2(e.target.value)}
                            />
                        </div>

                        <div className='block'>
                            <div className="form-group">
                                <label htmlFor="inputcity" className="label">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputcity"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />

                                <label htmlFor="inputprovince" className="label" style={{ width: '13%', textAlign: 'center' }}>
                                    Province:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputprovince"
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputpostalcode" className="label">
                                    Postal Code:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputpostalcode"
                                    value={postalcode}
                                    onChange={(e) => setPostalcode(e.target.value)}
                                />
                                <label htmlFor="inputcountry" className="label" style={{ width: '13%', textAlign: 'center' }}>
                                    Country:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputcountry"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputisn" className="label">
                                    ISN Agent ID:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputisn"
                                    value={isn}
                                    onChange={(e) => setISN(e.target.value)}
                                />
                            </div>

                            <div className="form-group" >
                                <label htmlFor="inputhip" className="label">
                                    HIP Office Agent ID:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputhip"
                                    value={hip}
                                    onChange={(e) => setHIP(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputnxt" className="label">
                                    NXT Agent ID:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputnxt"
                                    value={nxt}
                                    onChange={(e) => setNxt(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputemail" className="label">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    className="input-for-form"
                                    id="inputemail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="inputwebsite" className="label">
                                    Website:
                                </label>
                                <input
                                    type="text"
                                    className="input-for-form"
                                    id="inputwebsite"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputnotes" className="label">
                                    Notes:
                                </label>
                                <textarea
                                    className="input-for-form"
                                    id="inputnotes"
                                    rows="4"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className='button-container' style={{ width: '50vw' }}>
                            <button className="save">Save</button>
                            <button className="delete"onClick={() => setAgents([])}>Delete Account</button>
                            <button className="add-agent">Add New Agent</button>

                            <div >
                                <button className="export">Export Contact</button>
                                <button className="import">Import Contact</button>
                            </div>

                            <button className="sync">Sync Agents With HIP Office</button>
                        </div>
                    </form>
{/* 
                    <div className="photo-container" style={{ padding: '20px' }}>
                        <label htmlFor="inputphoto" className="label">
                            Upload Photo:
                        </label>
                        <div className="upload-photo-container">
                            <div className="upload-photo-preview"></div>
                            <input
                                type="file"
                                id="inputphoto"
                                className="input-for-form"
                                onChange={(e) => {
                                }
                                }
                            /> 
                            <div className="upload-buttons">
                                <button className="upload">Upload</button>
                                <button className="save">Save</button>
                            </div>
                        </div>
                    </div> */}

                </div>

                <table>
                    <thead>
                        <tr>
                            <th>First</th>
                            <th>Agent Last Name</th>
                            <th>Company</th>
                            <th>Work phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agents.map((agent, index) => (
                            <tr key={index}>
                                <td>{agent.firstName}</td>
                                <td>{agent.lastName}</td>
                                <td>{agent.company}</td>
                                <td>{agent.workphone}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Book
