import { FC } from "react";

interface ButtonProps {
  text: string;
  callback: () => void;
  className: "primary" | "secondary";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, callback, className }) => {
  return (
    <button className={className} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
