import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/authservice";
import Mail from "../assets/icon-email.svg";
import Password from "../assets/icon-password.svg";
import Input from "../elements/Input";
import Button from "../elements/Button";

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
        <div className="form-group">
          <label
            className={`light-text small-text ${emailFailed ? "red-text" : ""}`}
            htmlFor="email"
          >
            Email address
          </label>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. alex@email.com"
            name="email"
            error={emailFailed}
            image={<img src={Mail} alt="mail" />}
          />
        </div>
        <div className="form-group">
          <label
            className={`light-text small-text ${loginFailed ? "red-text" : ""}`}
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            name="password"
            error={loginFailed}
            image={<img src={Password} alt="password" />}
          />
        </div>
        <Button type="submit" text="Log In" className="primary" />
      </form>
      <span className="row-container">
        <h3>Don't have an account? </h3>
        <button
          className="reset-button navigate-button"
          type="button"
          onClick={() => navigate("/register")}
        >
          Create account
        </button>
      </span>
    </div>
  );
};

export default Login;
