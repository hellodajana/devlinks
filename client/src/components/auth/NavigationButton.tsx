import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationButtonProps {
  questionText: string;
  btnText: string;
  link: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({
  questionText,
  btnText,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <span className="row-container">
      <h3>{questionText}</h3>
      <button
        className="reset-button navigate-button"
        type="button"
        onClick={() => navigate(link)}
      >
        {btnText}
      </button>
    </span>
  );
};

export default NavigationButton;
