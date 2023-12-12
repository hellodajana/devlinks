import { FC, ReactNode } from "react";

interface SmallButtonProps {
  text: string;
  image?: ReactNode;
  onClick?: () => void;
}

const SmallButton: FC<SmallButtonProps> = ({ text, image }) => {
  return (
    <button type="button" className="small-btn">
      {image && image}
      {text}
    </button>
  );
};

export default SmallButton;
