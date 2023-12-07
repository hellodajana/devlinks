import React, { FC, ReactNode, useState } from "react";

interface InputProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  error?: string;
  image?: ReactNode;
}

const Input: FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  type,
  error,
  image,
}) => {
  const isFilled = value !== "";
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const classNames = [
    "input-wrapper",
    isFilled ? "input-filled" : "",
    error ? "input-error" : "",
    isFocused ? "input-focused" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {image && image}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
