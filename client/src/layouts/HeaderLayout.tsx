import { useOutlet, useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import SmallButton from "../elements/SmallButton";
import Logo from "../assets/logo-devlinks-large.svg";
import Link from "../assets/icon-links-header.svg";
import Profile from "../assets/icon-profile-details-header.svg";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  return (
    <div className="main-margin">
      <nav className="navbar-container">
        <img
          className="logo pointer"
          src={Logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <div className="small-button-wrapper">
          <SmallButton text="Links" image={<img src={Link} alt="links" />} />
          <SmallButton
            text="Profile Details"
            image={<img src={Profile} alt="profile details" />}
          />
        </div>
        <Button text="Preview" className="secondary" type="button" />
      </nav>
      {outlet}
    </div>
  );
};

export default HeaderLayout;
