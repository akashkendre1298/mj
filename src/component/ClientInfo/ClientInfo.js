import React, { useState, useEffect } from "react";
import "./ClientInfo.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ClientInfo = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [inspectionAddress, setInspectionAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [agent, setAgent] = useState("");
  const [dateOfInspection, setDateOfInspection] = useState("");
  const [timeOfInspection, setTimeOfInspection] = useState("");
  const [ageOfHome, setAgeOfHome] = useState("");
  const [size, setSize] = useState("");
  const [inspectionFee, setInspectionFee] = useState("");
  const [weather, setWeather] = useState("");
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

  return (
    <div className="main-container z">
      <div>
        <Header />
      </div>

      <div>sgdhjk</div>
      <form className="formcont">
        <h1 className="text">Client Information</h1>

        <div className="form-group">
          <label htmlFor="inputlastname" className="label">
            Last Name:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputlastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label
            htmlFor="inputfirstname"
            className="label"
            style={{ width: "11%", marginLeft: "5px" }}
          >
            First Name:
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
          <label htmlFor="inputphone" className="label">
            Phone Number:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label
            htmlFor="inputfax"
            className="label"
            style={{ width: "11%", marginLeft: "5px" }}
          >
            Fax:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputfax"
            value={fax}
            onChange={(e) => setFax(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputemail" className="label">
            Email:
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
          <label htmlFor="inputinspection" className="label">
            Inspection Address:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputinspection"
            value={inspectionAddress}
            onChange={(e) => setInspectionAddress(e.target.value)}
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
        <div className="block">
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

            <label
              htmlFor="inputstate"
              className="label"
              style={{ width: "11%", marginLeft: "5px" }}
            >
              State:
            </label>
            <input
              type="text"
              className="input-for-form"
              id="inputstate"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="inputzip" className="label">
              ZIP Code:
            </label>
            <input
              type="text"
              className="input-for-form"
              id="inputzip"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputagent" className="label">
            Real Estate Agent:
          </label>
          <select
            className="input-for-form"
            id="inputagent"
            value={agent}
            onChange={(e) => setAgent(e.target.value)}
          >
            <option value="macj-home-inspector">macj-home-inspector</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="inputdate" className="label">
            Date of Inspection:
          </label>
          <input
            type="date"
            className="input-for-form"
            id="inputdate"
            value={dateOfInspection || defaultDate}
            onChange={(e) => setDateOfInspection(e.target.value)}
          />

          <label
            htmlFor="inputtime"
            className="label"
            style={{ width: "11%", marginLeft: "5px" }}
          >
            Time :
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputtime"
            value={timeOfInspection}
            onChange={(e) => setTimeOfInspection(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputage" className="label">
            Age of Home:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputage"
            value={ageOfHome}
            onChange={(e) => setAgeOfHome(e.target.value)}
          />

          <label
            htmlFor="inputsize"
            className="label"
            style={{ width: "11%", marginLeft: "5px" }}
          >
            Size:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputsize"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputfee" className="label">
            Inspection Fee:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputfee"
            value={inspectionFee}
            onChange={(e) => setInspectionFee(e.target.value)}
          />

          <label
            htmlFor="inputweather"
            className="label"
            style={{ width: "11%", marginLeft: "5px" }}
          >
            Weather:
          </label>
          <input
            type="text"
            className="input-for-form"
            id="inputweather"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputagent" className="label">
            Other Info:
          </label>
          <textarea
            className="input-for-form"
            id="inputagent"
            rows="4"
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
          ></textarea>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientInfo;
