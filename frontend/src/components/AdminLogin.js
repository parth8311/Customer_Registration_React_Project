import React, { useState } from "react";
import api from "../utils/api";
import "./AdminLogin.css"; // Import the CSS file

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", formData);
      setMessage("Login successful!");
      // You can store the token in localStorage or context if needed
      localStorage.setItem("adminToken", response.data.token);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-title">Admin Login</h2>
      {message && <p className="admin-login-message">{message}</p>}
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="admin-login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="admin-login-input"
        />
        <button type="submit" className="admin-login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
