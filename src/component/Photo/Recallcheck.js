import "./Recallcheck.css";
const Recallcheck = () => {
  return (
    <>
      <div className="RC-main-container">
        <label for="RecallCheck" className="Recallcheck-container-labelname">
          RecallCheck
        </label>
        <br />
        <input
          type="text"
          className="RC-contaier-reacll-check-Appliance-type"
          name="username"
          placeholder="Appliance Type"
        />
        <br />
        <input
          type="text"
          className="RC-contaier-reacll-check-Appliance-type"
          name="username"
          placeholder="Brand"
        />
      </div>
    </>
  );
};
export default Recallcheck;
