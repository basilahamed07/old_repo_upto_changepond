import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });

            if (response.data) {
                const { access_token, user } = response.data;

                // Store the token in session storage
                sessionStorage.setItem('jwtToken', access_token);
                
                // Store user information
                sessionStorage.setItem('userId', user.userId)
                sessionStorage.setItem('user', user.username);
                sessionStorage.setItem('role', user.role);

                // Redirect based on role
                if (user.role === 'admin') {
                    navigate('/admin-dashboard', { replace: true });
                } else if (user.role === 'user') {
                    navigate('/user-dashboard', { replace: true });
                }
            } else {
                setError('Unexpected response structure');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="mt-6">
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
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`mt-6 w-full ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white p-2 rounded-md hover:bg-blue-600`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
