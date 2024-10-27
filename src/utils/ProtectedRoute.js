// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // If no token is found, redirect to login
    return <Navigate to="/" />;
  }

  try {
    // Decode token to get user role
    const decodedToken = jwtDecode(token);
    if (decodedToken.role !== 'USER') {
      // Redirect if role does not match "user"
      return <Navigate to="/" />;
    }
  } catch (error) {
    // If token is invalid, redirect to login
    return <Navigate to="/" />;
  }

  // If the role is "user", allow access to the protected route
  return children;
};

export default ProtectedRoute;
