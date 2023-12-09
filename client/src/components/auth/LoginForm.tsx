import { FC, ChangeEvent } from "react";
import Input from "../../elements/Input";
import Email from "../../assets/icon-email.svg";
import Password from "../../assets/icon-password.svg";

interface LoginFormProps {
  data: {
    email: string;
    password: string;
  };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: FC<LoginFormProps> = ({ data, handleChange }) => {
  return (
    <form>
      <label htmlFor="email">Email adress</label>
      <Input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="e.g. alex@email.com"
        image={<img src={Email} alt="Link Icon" />}
      />
      <Input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter your password"
        image={<img src={Password} alt="Link Icon" />}
      />
    </form>
  );
};

export default LoginForm;
