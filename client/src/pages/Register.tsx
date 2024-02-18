import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../services/authservice";
import Mail from "../assets/icon-email.svg";
import Password from "../assets/icon-password.svg";
import Button from "../elements/Button";
import InputField from "../components/auth/InputField";
import NavigationButton from "../components/auth/NavigationButton";

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
      navigate("/auth/login");
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
          label="Create password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="At least 8 characters"
          name="password"
          error={registrationFailed}
          image={<img src={Password} alt="password" />}
        />
        <InputField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="At least 8 characters"
          name="password"
          error={registrationFailed}
          image={<img src={Password} alt="password" />}
        />
        <p>Password must contain at least 8 characters.</p>
        <Button
          type="submit"
          text="Create new account"
          className="primary"
          Image={null}
        />
      </form>
      <NavigationButton
        questionText="Already have an account? "
        btnText="Login"
        link="/auth/login"
      />
    </div>
  );
};

export default Register;
