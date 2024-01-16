import "./Location.css";
const Location = () => {
  return (
    <>
      <div className="Location-container">
        <label for="username">Location</label>
        <br />
        <select id="locationIF">
          <option value=""></option>
          <option value="option1">Inspection Details</option>
          <option value="option2">Interior Areas</option>
          <option value="option3">Bedrooms</option>
          <option value="option3">Bathroom</option>
          <option value="option3">Kitchen</option>
          <option value="option3">Laundry</option>
          <option value="option3">Heat/AC</option>
          <option value="option3">Water Heater</option>
          <option value="option3">Garage</option>
          <option value="option3">Electrical</option>
          <option value="option3">Roof</option>
          <option value="option3">Attic</option>
          <option value="option3">Exterior Areas</option>
          <option value="option3">Foundation</option>
          <option value="option3">Grounds</option>
          <option value="option3">Pool</option>
          <option value="option3">Basement/Crawlspace</option>
        </select>
        <br />
        <select id="locationIF"></select>
      </div>
      <div className="LCButton-container">
        <button>=</button>
      </div>

      <div className="fb-container">
        <input type="checkbox" id="agree" name="agree" />
        <label for="agree">Print At End</label>
        <input type="checkbox" id="agree" name="agree" />
        <label for="agree">Summary</label>
        <br />
        <input type="checkbox" id="agree" name="agree" />
        <label for="agree">Use Location As Caption</label>
      </div>
    </>
  );
};
export default Location;
