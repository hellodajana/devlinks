import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import HeaderLayout from "./layouts/HeaderLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="auth/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Home />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
