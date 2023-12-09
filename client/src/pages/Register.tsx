import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/authservice";
import Mail from "../assets/icon-email.svg";
import Password from "../assets/icon-password.svg";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [emailFailed, setEmailFailed] = useState<string>("");
  const [registrationFailed, setRegistrationFailed] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "") {
      setEmailFailed("Can't be empty");
      return;
    }
    if (password.length < 8) {
      setRegistrationFailed("Please try again");
      return;
    }
    if (password !== confirmPassword) {
      setRegistrationFailed("Please try again");
      return;
    }
    try {
      await authservice.register(email, password);
      setSuccess(true);
    } catch (error) {
      setRegistrationFailed("Please try again");
    }
  };

  useEffect(() => {
    if (success) {
      navigate("login");
    }
  }, [success, navigate]);

  return (
    <div className="auth-container">
      <div>
        <h1>Create account</h1>
        <h3 className="light-text">
          Let's get you started sharing your links!
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
            className={`light-text small-text ${
              registrationFailed ? "red-text" : ""
            }`}
            htmlFor="password"
          >
            Create password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            name="password"
            error={registrationFailed}
            image={<img src={Password} alt="password" />}
          />
        </div>
        <div className="form-group">
          <label
            className={`light-text small-text ${
              registrationFailed ? "red-text" : ""
            }`}
            htmlFor="password"
          >
            Confirm password
          </label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="At least 8 characters"
            name="password"
            error={registrationFailed}
            image={<img src={Password} alt="password" />}
          />
        </div>
        <p>Password must contain at least 8 characters</p>
        <Button type="submit" text="Log In" className="primary" />
      </form>
      <span className="row-container">
        <h3>Already have an account? </h3>
        <button
          className="reset-button navigate-button"
          type="button"
          onClick={() => navigate("/auth/login")}
        >
          Login
        </button>
      </span>
    </div>
  );
};

export default Register;
