import "./Location.css";
const Location = () => {
  return (
    <>
      <div className="PhotoReview-Location-container">
        <label for="username">Location</label>
        <br />
        <select className="PhotoReview-Location-first-inputfields">
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
        <select className="PhotoReview-Location-first-inputfields"></select>
      </div>
      <div className="PhotoReview-Location-button">
        <button>=</button>
      </div>

      <div className="PhotoReview-Location-Checkbox-Container">
        <input type="checkbox" name="agree" />
        <label for="agree" className="PhotoReview-Location-Checkbox-label">
          Print At End
        </label>
        <input
          type="checkbox"
          className="PhotoReview-Location-Checkbox-label"
          name="agree"
        />
        <label for="agree" className="PhotoReview-Location-Checkbox-label">
          Summary
        </label>
        <br />
        <input type="checkbox" id="agree" name="agree" />
        <label for="agree" className="PhotoReview-Location-Checkbox-label">
          Use Location As Caption
        </label>
      </div>
    </>
  );
};
export default Location;
