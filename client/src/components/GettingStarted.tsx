import Button from "../elements/Button";
import GetStarted from "../assets/illustration-empty.svg";

const GettingStarted = () => {
  return (
    <>
      <div className="text-wrapper">
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Button text="+ Add new link" className="secondary" type="button" />
      <div className="get-started-wrapper">
        <img className="logo" src={GetStarted} alt="logo" />
        <h1>Let's get you started</h1>
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
      <hr className="breakpoint" />
      <div className="button-wrapper">
        <Button text="Save" className="secondary" type="button" />
      </div>
    </>
  );
};

export default GettingStarted;
