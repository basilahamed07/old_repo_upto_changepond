import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', { 
                username, 
                password, 
                role: 'admin' // Default to admin
            });
            console.log(response.data);

            // Assuming the JWT token is returned in the response
            const { token } = response.data; // Adjust according to your API response structure

            // Store the JWT token in session storage or local storage
            sessionStorage.setItem('jwtToken', token); // Or use localStorage

            // Show success toast
            toast.success('Registration successful! Please log in.');

            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Register</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleRegister} className="mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button type="submit" className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
