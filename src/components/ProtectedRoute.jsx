import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const storedData = localStorage.getItem("loginData");
  const user = storedData ? JSON.parse(storedData) : null;

  if (!user || !user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;