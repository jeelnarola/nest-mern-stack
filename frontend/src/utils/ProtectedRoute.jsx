import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const token = localStorage.getItem("access_token");

  // ✅ If no token, block access
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // ✅ Check if token expired
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("access_token"); // cleanup
      return <Navigate to="/login" replace />;
    }

    // ✅ Token valid → render child routes
    return <Outlet />; 
  } catch (error) {
    // Invalid token
    localStorage.removeItem("access_token");
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoute