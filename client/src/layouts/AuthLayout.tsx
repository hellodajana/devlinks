import { useOutlet } from "react-router-dom";
import Logo from "../assets/logo-devlinks-large.svg";

const AuthLayout = () => {
  const outlet = useOutlet();
  return (
    <div className="background">
      <div className="center-container">
        <span className="background-wrapper">
          <img className="logo" src={Logo} alt="logo" />
          {outlet}
        </span>
      </div>
    </div>
  );
};

export default AuthLayout;
