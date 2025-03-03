import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAdmin }) => {
  return isAdmin ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
    