import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import "../Page/Css/RegisterPage.css";
import fondoDino from "../assets/fondoDino.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// RegisterPage component for user registration
const RegisterPage = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [name, setName] = useState(""); // State to store username input
  const [password, setPassword] = useState(""); // State to store password input
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, password }; // Gather user data from state
    try {
      await ApiService.createUser(userData); // Call API to create a new user
      alert("Usuario creado exitosamente"); // Show success alert
      navigate("/login"); // Navigate to login page
    } catch (error) {
      toast.error(error.message || "Error creando cuenta"); // Show error toast
    }
  };

  return (
    <div className="register-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <div className="titles">
            <h2>Crear Cuenta</h2>
            <h5>No te preocupes no la compartiremos con nadie</h5>
          </div>
          {/* Form to handle user registration */}
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <input
              type="email"
              placeholder="CORREO ELECTRÓNICO"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            {/* Username input field */}
            <input
              type="text"
              placeholder="NOMBRE DE USUARIO"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            {/* Password input field */}
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            {/* Submit button */}
            <button className="buttonLog" type="submit">
              Crear Cuenta
            </button>
            <p>¿Ya tiénes una cuenta?</p>
            {/* Link to login page */}
            <Link to="/login">Iniciar Sesión</Link>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
};

export default RegisterPage;
