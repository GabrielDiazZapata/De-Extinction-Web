import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// AdminRoute component to protect admin routes
const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  // If no user is logged in, redirect to home page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If logged-in user is not an admin, redirect to home page
  if (!user.admin) {
    return <Navigate to="/" />;
  }

  // If user is an admin, render the children components
  return children;
};

export default AdminRoute;
