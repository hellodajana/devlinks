import { useNavigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  if (!isAuthenticated && !loading) {
    navigate("/auth/login");
  }

  return <div>{outlet}</div>;
};

export default ProtectedRoute;
