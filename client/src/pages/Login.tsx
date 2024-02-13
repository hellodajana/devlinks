import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/authservice";
import Mail from "../assets/icon-email.svg";
import Password from "../assets/icon-password.svg";
import Button from "../elements/Button";
import InputField from "../components/auth/InputField";
import NavigationButton from "../components/auth/NavigationButton";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [emailFailed, setEmailFailed] = useState<string>("");
  const [loginFailed, setLoginFailed] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") {
      setEmailFailed("Can't be empty");
      return;
    }
    try {
      await authservice.login(email, password);
      setSuccess(true);
    } catch (error) {
      setLoginFailed("Please try again");
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  return (
    <div className="auth-container">
      <div>
        <h1>Login</h1>
        <h3 className="light-text">
          Add your details bellow to get back into the app
        </h3>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          label="Email address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. alex@email.com"
          name="email"
          error={emailFailed}
          image={<img src={Mail} alt="mail" />}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          name="password"
          error={loginFailed}
          image={<img src={Password} alt="password" />}
        />
        <Button type="submit" text="Log In" className="primary" Image={null} />
      </form>
      <NavigationButton
        questionText="Don't have an account?"
        btnText="Create account"
        link="/auth/register"
      />
    </div>
  );
};

export default Login;
