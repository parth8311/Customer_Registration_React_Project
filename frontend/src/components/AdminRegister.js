import React, { useState } from "react";
import api from "../utils/api";
import "./AdminRegister.css"; // Import the CSS file

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
      await api.post("/auth/register", { ...formData, role: "admin" });
      setMessage("Registration successful! Please verify your email.");
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="admin-register-container">
      <h2 className="admin-register-title">Admin Registration</h2>
      {message && <p className="admin-register-message">{message}</p>}
      <form className="admin-register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="admin-register-input"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="admin-register-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="admin-register-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="admin-register-input"
        />
        <button type="submit" className="admin-register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
