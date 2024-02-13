import { FC, ReactElement } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className: "primary" | "secondary" | "text-btn";
  disabled?: boolean;
  type: "submit" | "button";
  Image: ReactElement | null;
}

const Button: FC<ButtonProps> = ({ text, onClick, className, type, Image }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {Image ? Image : text}
    </button>
  );
};

export default Button;
