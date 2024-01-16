import "./Editor.css";

const CaptionEditor = () => {
  return (
    <>
      <div>
        <input type="text" id="username" name="username" placeholder="" />
      </div>
      <button>Save Changes</button>
      <button>Discard Changes</button>
    </>
  );
};

export default CaptionEditor;
