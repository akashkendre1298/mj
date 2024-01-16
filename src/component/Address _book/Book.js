import React, { useState, useEffect } from "react";
import "./Book.css";
import "./Style.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Book = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [Company, setCompany] = useState("");
  const [workPhone, setworkPhone] = useState("");
  const [WorkFax, setWorkFax] = useState("");
  const [HomePhone, setHomePhone] = useState("");
  const [HomeFax, setHomeFax] = useState("");
  const [Cellphone, setCellphone] = useState("");
  const [Pager, setPager] = useState("");
  const [Address, setAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [City, setCity] = useState("");
  const [Province, setProvince] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Country, setCountry] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Website, setWebsite] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [Notes, setNotes] = useState("");

  const [otherInfo, setOtherInfo] = useState("");

  const [defaultDate, setDefaultDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, "0"); // Month is zero-based
    const day = `${currentDate.getDate()}`.padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setDefaultDate(formattedDate);
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);

      // Simulate an asynchronous upload (replace with your actual upload logic)
      setTimeout(() => {
        setIsUploading(false);
        alert("File uploaded successfully!");
        setSelectedFile(null);
      }, 2000);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  const handleCancel = () => {
    setIsUploading(false);
    setSelectedFile(null);
  };

  return (
    <div className="main-container-book">
      <div>
        <Header />
      </div>

      <div class="flex flex-row" style={{ lineHeight: "17px" }}>
        <div class="basis-1/1">
          <div className="box1-book flex ml-5">
            <form className="formcont-book mr-">
              <h1 className="text-book">Real Estate Agent Information</h1>

              <div className="form-group-book">
                <label htmlFor="inputlastname" className="label-book">
                  Agent Last Name
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputlastname"
                  value={lastName}
                  style={{ width: "11%" }}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label
                  htmlFor="inputfirstname"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  First
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputfirstname"
                  value={firstName}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputCompany" className="label-book">
                  Company
                </label>
                <input
                  type="emaCompanyil"
                  className="input-for-form-book"
                  id="inputCompany"
                  value={Company}
                  style={{ width: "11%" }}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="form-group-book">
                <label htmlFor="inputworkPhone" className="label-book">
                  Work Phone
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputworkPhone"
                  value={workPhone}
                  style={{ width: "11%" }}
                  onChange={(e) => setworkPhone(e.target.value)}
                />

                <label
                  htmlFor="inputWorkFax"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  Work Fax
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputWorkFax"
                  value={WorkFax}
                  style={{ width: "12%", marginLeft: "6px" }}
                  onChange={(e) => setWorkFax(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputHomePhone" className="label-book">
                  Home Phone
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputHomePhone"
                  value={HomePhone}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setHomePhone(e.target.value)}
                />

                <label
                  htmlFor="inputHomeFax"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  Home Fax
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputHomeFax"
                  value={HomeFax}
                  onChange={(e) => setHomeFax(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputCellphone" className="label-book">
                  Cellphone
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputCellphone"
                  value={Cellphone}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setCellphone(e.target.value)}
                />

                <label
                  htmlFor="inputfax"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  Pager
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputPager"
                  value={Pager}
                  onChange={(e) => setPager(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputAddress" className="label-book">
                  Address
                </label>
                <input
                  type="Address"
                  className="input-for-form-book"
                  id="inputAddress"
                  value={Address}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputaddress2" className="label-book">
                  Address (Line 2):
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputaddress2"
                  value={addressLine2}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputCity" className="label-book">
                  City
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputCity"
                  value={City}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setCity(e.target.value)}
                />

                <label
                  htmlFor="inputProvince"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  Province
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputProvince"
                  value={Province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputPostalCode" className="label-book">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputPostalCode"
                  value={PostalCode}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setPostalCode(e.target.value)}
                />

                <label
                  htmlFor="inputfaxCountry"
                  className="label-book"
                  style={{ width: "11%", marginLeft: "5px" }}
                >
                  Country
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputCountry"
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group-book">
                <label htmlFor="inputEmailAddress" className="label-book">
                  Email Address
                </label>
                <input
                  type="text"
                  className="input-for-form-book"
                  id="inputEmailAddress"
                  value={EmailAddress}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              <div className="block">
                <div className="form-group-book">
                  <label htmlFor="inputWebsite" className="label-book">
                    Website
                  </label>
                  <input
                    type="text"
                    className="input-for-form-book"
                    id="inputWebsite"
                    value={Website}
                    style={{ width: "11%", marginLeft: "5px" }}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <label
                    htmlFor="inputState"
                    className="label-book"
                    style={{ width: "11%", marginLeft: "5px" }}
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="input-for-form-book"
                    id="inputstate"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="form-group-book">
                  <label htmlFor="inputzip" className="label-book">
                    ZIP Code:
                  </label>
                  <input
                    type="text"
                    className="input-for-form-book"
                    id="inputzip"
                    value={zipCode}
                    style={{ width: "11%", marginLeft: "5px" }}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group-book">
                <label htmlFor="inputNotes" className="label-book">
                  Notes
                </label>
                <textarea
                  className="input-for-form-book"
                  id="inputNotes"
                  rows="5"
                  value={Notes}
                  style={{ width: "11%", marginLeft: "5px" }}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
            </form>
            <div class="basis-1/1 ml-5">
              <div className="photoupload-book ">
                <div className="bg-white ml-2 mt-10 w-40 h-48 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <p class="text-gray-600">Agent Photo</p>
                </div>

                <div class="flex ml-2 mt-2">
                  <div class="flex space-x-4">
                    <button class="bg-gray-300 hover:bg-gray-400 px-3 border border-gray-400 rounded">
                      Upload
                    </button>
                    <button class="bg-gray-300 hover:bg-gray-400  px-3 border border-gray-400 rounded">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="basis-1/2 bg-white mt-2 w-100 mr-3 ml-10 "
          style={{ hight: "45%" }}
        >
          <div className="">
            <table className="table-auto border border-black ml-5 mt-2 ">
              <thead>
                <tr>
                  <td
                    className="border border-black p-2 text-center"
                    style={{ width: "20%" }}
                  >
                    First
                  </td>
                  <td
                    className="border border-black p-2 text-center"
                    style={{ width: "20%" }}
                  >
                    Agent Last Name
                  </td>
                  <td
                    className="border border-black p-2 text-center"
                    style={{ width: "20%" }}
                  >
                    Company
                  </td>
                  <td
                    className="border border-black p-2 text-center"
                    style={{ width: "20%" }}
                  >
                    Work
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className="btn-conat-book ml-5 ">
        <div className="flex flex-col-3 gap-1 mt-2 ml-2 ">
          <button className="border border-black bg-gray-300 hover:bg-blue-100 w-60 h-6 rounded">
            Save
          </button>
          <button className="border border-black bg-gray-300 hover:bg-blue-100 w-60 h-6 rounded">
            Export Contacts
          </button>
          <button className="border border-black bg-gray-300 hover:bg-blue-100  w-60  h-6 rounded">
            Delete Agent
          </button>
        </div>
        <div className="flex gap-1 mt-2 ml-2">
          <button
            className="border border-black bg-gray-300 hover:bg-blue-100 h-6 rounded"
            style={{ width: "24%" }}
          >
            Sync Agents with HIP Office
          </button>
          <button
            className="border border-black bg-gray-300 hover:bg-blue-100 h-6 rounded"
            style={{ width: "24%" }}
          >
            Add New Agent
          </button>
        </div>
        <div className="flex gap-1 mt-2 ml-2">
          <button
            className="border border-black bg-gray-300 hover:bg-blue-100  h-6 rounded"
            style={{ width: "48.5%" }}
          >
            Import Contacts
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Book;
