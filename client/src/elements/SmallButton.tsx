import { FC, ReactElement } from "react";
import useIsMobile from "../hooks/useIsMobile";

interface SmallButtonProps {
  text: string;
  Image?: ReactElement;
  click?: () => void;
  isActive: boolean;
}

const SmallButton: FC<SmallButtonProps> = ({
  text,
  Image,
  click,
  isActive,
}) => {
  const isMobile = useIsMobile();
  return (
    <button
      type="button"
      className={`small-btn ${isActive ? "active" : ""}`}
      onClick={click}
    >
      {Image && Image}
      {!isMobile && text}
    </button>
  );
};

export default SmallButton;
