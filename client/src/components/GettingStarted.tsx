import GetStarted from "../assets/illustration-empty.svg";

const GettingStarted = () => {
  return (
    <div className="get-started-wrapper">
      <img className="logo" src={GetStarted} alt="logo" />
      <h1>Let's get you started</h1>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default GettingStarted;
