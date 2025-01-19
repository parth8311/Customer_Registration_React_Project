import React, { useState } from "react";
import api from "../utils/api";
import "./CustomerRegister.css"; // Import the CSS file

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { ...formData, role: "customer" });
      alert("Registration successful! Please verify your email.");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="customer-register-container">
      <h2 className="customer-register-title">Customer Registration</h2>
      <form className="customer-register-form" onSubmit={handleSubmit}>
        <input
          className="customer-register-input"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="customer-register-input"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="customer-register-input"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="customer-register-input"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="customer-register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default CustomerRegister;
