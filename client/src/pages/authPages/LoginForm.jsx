import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );

      localStorage.setItem("authToken", response.data.token);
      console.log(response);
      setSuccess("Signup successful!");
      navigate("/dashboard");
      console.log("User signed up:", response.data);
    } catch (error) {
      setError(error.response.data.msg || "Something went wrong.");
      console.error(error.response);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign in to Zento</h2>
        <form className="form" onSubmit={handleSubmit} action="">
          <input
            className="input-box"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          <input
            className="input-box"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          <div className="submit-btn-cont">
          <Button className={"submit-btn"} text={"Login"} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
