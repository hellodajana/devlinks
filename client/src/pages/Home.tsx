import { useState } from "react";
import Links from "../dashboard/Links";
import PhoneShape from "../dashboard/PhoneShape";
import Button from "../elements/Button";

const Home = () => {
  const [linkValue, setLinkValue] = useState("");
  const [linkError, setLinkError] = useState("");

  const handleSubmit = async () => {
    if (linkValue === "") {
      setLinkError("Can't be empty");
      return;
    }
    // try {
    //   await authservice.login(email, password);
    //   setSuccess(true);
    // } catch (error) {
    //   setLoginFailed("Please try again");
    // }
  };

  return (
    <main className="main-container">
      <div className="card card-1">
        <PhoneShape />
      </div>
      <div className="card card-links">
        <div className="card-2">
          <Links
            linkValue={linkValue}
            setLinkValue={setLinkValue}
            linkError={linkError}
          />
        </div>
        <hr className="breakpoint" />
        <div className="card-3">
          <Button
            text="Save"
            className="primary"
            type="button"
            Image={null}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
