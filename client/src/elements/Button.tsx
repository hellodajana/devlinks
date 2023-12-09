import { FC } from "react";

interface ButtonProps {
  text: string;
  callback?: () => void;
  className: "primary" | "secondary";
  disabled?: boolean;
  type: "submit" | "button";
}

const Button: FC<ButtonProps> = ({ text, callback, className, type }) => {
  return (
    <button type={type} className={className} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
