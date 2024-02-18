import GetStarted from "../assets/illustration-empty.svg";

const GettingStarted = () => {
  return (
    <div className="links-wrapper">
      <div className="get-started-wrapper">
        <img className="get-started-img" src={GetStarted} alt="logo" />
        <h1>Let's get you started</h1>
        <p>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;
