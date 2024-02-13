//  <reference types="vite-plugin-svgr/client" />
import { ReactElement, FC } from "react";

interface LogoProps {
  Image?: ReactElement;
  click: () => void;
}

const Logo: FC<LogoProps> = ({ Image, click }) => {
  return (
    <button className="logo pointer reset-button" onClick={click}>
      {Image}
    </button>
  );
};

export default Logo;
