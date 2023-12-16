import { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className: "primary" | "secondary";
  disabled?: boolean;
  type: "submit" | "button";
}

const Button: FC<ButtonProps> = ({ text, onClick, className, type }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
