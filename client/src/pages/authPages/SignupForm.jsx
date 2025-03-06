import React, { useState } from "react";
import {Button} from "../../components/button/Button";
import "./AuthPages.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        formData
      );

      localStorage.setItem("authToken", response.data.token);
      console.log(response);
      setSuccess("Signup successful!");
      navigate('/dashboard')
      console.log("User signed up:", response.data);
    } catch (error) {
      setError(error.response.data.msg || "Something went wrong.");
      console.error(error.response);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const confirmPassword = (e) => {
    
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Get started with Zento</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input-box"
            name="username"
            value={formData.username}
            type="text"
            onChange={handleChange}
            placeholder="Enter username"
          />
          <input
            className="input-box"
            name="email"
            value={formData.email}
            type="text"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <input
            className="input-box"
            name="password"
            value={formData.password}
            type="password"
            onChange={handleChange}
            placeholder="Input password"
          />
          <input
            className="input-box"
            name="confirm-password"
            type="password"
            onChange={confirmPassword}
            placeholder="Confirm password"
          />
          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
          {/* <p className="alert"></p> */}
          <div className="submit-btn-cont">
            <Button className={"submit-btn"} text={"Sign Up"} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
