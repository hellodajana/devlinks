//  <reference types="vite-plugin-svgr/client" />
import { useOutlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../elements/Button";
import SmallButton from "../elements/SmallButton";
import DesktopLogo from "../assets/logo-devlinks-large.svg?react";
import PhoneLogo from "../assets/logo-devlinks-small.svg?react";
import Link from "../assets/icon-links-header.svg?react";
import Profile from "../assets/icon-profile-details-header.svg?react";
import Preview from "../assets/icon-preview-header.svg?react";
import Logo from "../elements/Logo";
import useIsMobile from "../hooks/useIsMobile";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const isLinksActive = pathname === "/";
  const isProfileActive = pathname === "/profile";

  return (
    <>
      <nav className="navbar-container">
        <Logo
          Image={isMobile ? <PhoneLogo /> : <DesktopLogo />}
          click={() => navigate("/")}
        />
        <div className="small-button-wrapper">
          <SmallButton
            text="Links"
            Image={<Link />}
            click={() => navigate("/")}
            isActive={isLinksActive}
          />
          <SmallButton
            text="Profile Details"
            Image={<Profile />}
            click={() => navigate("/profile")}
            isActive={isProfileActive}
          />
        </div>
        <Button
          text="Preview"
          className="secondary"
          type="button"
          Image={isMobile ? <Preview /> : null}
        />
      </nav>
      <div className="main-margin">{outlet}</div>
    </>
  );
};

export default HeaderLayout;
