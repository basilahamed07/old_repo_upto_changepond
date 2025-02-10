import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import ProductListTable from './components/ProductListTable';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Register from './components/Register';
import ProductLineChart from './components/ProductLineChart';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { ToastContainer } from 'react-toastify';
import Greet from "./components/greets";
import EmailReport from './components/EmailReport';
import ChatBot from './components/chatbot';
import ParticipantExport from './components/testscv';

const App = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = sessionStorage.getItem('role');
    setUserRole(role);
  }, []);

  const ProtectedRoute = ({ children, requiredRole }) => {
    const userRole = sessionStorage.getItem('role');
  
    if (!userRole) {
      return <Navigate to="/login" />;
    }
  
    if (requiredRole && requiredRole !== userRole) {
      return <Navigate to="/user-dashboard" />; // or a forbidden page
    }
  
    return children;
  };

  return (
    <Router>
  <Routes>
    <Route 
      path="/" 
      element={sessionStorage.getItem('role') ? <Navigate to="/admin-dashboard" /> : <Navigate to="/login" />} 
    />
    
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/testcsv" element={<ParticipantExport />} />

    {/* User Dashboard */}
    <Route 
      path="/user-dashboard" 
      element={<ProtectedRoute><Greet /></ProtectedRoute>} 
    />

    {/* Admin Routes */}
    <Route 
      path="/admin-dashboard" 
      element={<ProtectedRoute requiredRole="admin"><Dashboard /></ProtectedRoute>} 
    />
    <Route 
      path="/add-product" 
      element={<ProtectedRoute requiredRole="admin"><AddProduct /></ProtectedRoute>} 
    />
    <Route 
      path="/edit-product/:id" 
      element={<ProtectedRoute requiredRole="admin"><EditProduct /></ProtectedRoute>} 
    />
    <Route 
      path="/users" 
      element={<ProtectedRoute requiredRole="admin"><UserList /></ProtectedRoute>} 
    />
    <Route 
      path="/add-user" 
      element={<ProtectedRoute requiredRole="admin"><AddUser /></ProtectedRoute>} 
    />
    
    {/* User and Admin Routes */}
    <Route 
      path="/products" 
      element={<ProtectedRoute><ProductListTable /></ProtectedRoute>} 
    />
    <Route 
      path="/graph" 
      element={<ProtectedRoute><ProductLineChart /></ProtectedRoute>} 
    />
    <Route 
      path="/email" 
      element={<ProtectedRoute><EmailReport /></ProtectedRoute>} 
    />
    <Route 
      path="/bot" 
      element={<ProtectedRoute><ChatBot /></ProtectedRoute>} 
    />
  </Routes>
  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} />
</Router>

  );
};

export default App;
