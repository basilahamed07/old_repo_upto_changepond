import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Import any necessary libraries for sending emails here

const Dashboard = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('user'); // Retrieve the username from session storage

  const handleLogout = () => {
    sessionStorage.clear(); // Clear session storage
    navigate('/'); // Redirect to login page
  };

  const handleSendReport = () => {
    // Logic to send the report goes here
    // This could be an API call to your backend or a third-party email service
    alert("Report sent to your email!"); // Placeholder for actual email sending logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white fade-in">
      <div className="w-full flex justify-end pr-6 pt-6">
        <button 
          onClick={handleLogout} 
          className="flex items-center justify-center bg-red-500 text-white text-lg p-3 rounded-lg hover:bg-red-400 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          <span className="material-icons text-2xl mr-2"></span>
          Logout
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-6 drop-shadow-md">Product Dashboard</h1>
      
      {/* Welcome message */}
      {username && (
        <h2 className="text-2xl mb-4 drop-shadow-md">
          Welcome, {username}!
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <Link 
          to="/products" 
          className="flex flex-col items-center justify-center bg-white text-blue-500 text-xl p-6 rounded-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          <span className="material-icons text-4xl mb-2">inventory</span>
          Go to Product List
        </Link>
        <Link 
          to="/graph" 
          className="flex flex-col items-center justify-center bg-white text-blue-500 text-xl p-6 rounded-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          <span className="material-icons text-4xl mb-2">analytics</span>
          Line Graph
        </Link>

        <Link 
          to="/email" 
          className="flex flex-col items-center justify-center bg-white text-blue-500 text-xl p-6 rounded-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          <span className="material-icons text-4xl mb-2">email</span>
          Send Report to Email
        </Link>
        
      </div>
    </div>
  );
};

export default Dashboard;
