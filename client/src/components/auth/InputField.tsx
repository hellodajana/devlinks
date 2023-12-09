import { FC } from "react";
import Input from "../../elements/Input";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  error?: string;
  image?: React.ReactNode;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  error,
  image,
}) => {
  return (
    <div className="form-group">
      <label
        className={`light-text small-text ${error ? "red-text" : ""}`}
        htmlFor={name}
      >
        {label}
      </label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        error={error}
        image={image}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default InputField;
