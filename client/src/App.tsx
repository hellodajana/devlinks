import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import HeaderLayout from "./layouts/HeaderLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="auth/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
