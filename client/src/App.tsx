import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
