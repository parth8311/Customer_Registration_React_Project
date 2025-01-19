import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import CustomerRegisterPage from "./pages/CustomerRegisterPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/customer/register" element={<CustomerRegisterPage />} />
    </Routes>
  </Router>
);

export default App;
