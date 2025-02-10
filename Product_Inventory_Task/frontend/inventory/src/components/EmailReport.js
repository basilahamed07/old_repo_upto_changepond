import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EmailReport.css'; // Import your custom styles if needed

const EmailReport = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    const fetchProducts = async () => {
        const token = sessionStorage.getItem('jwtToken');
        const userId = sessionStorage.getItem('userId');

        try {
            const response = await fetch('http://localhost:5000/products', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error Response:', errorText);
                throw new Error('Failed to fetch products');
            }

            const allProducts = await response.json();
            const filteredProducts = allProducts.filter(product => product.user_id === Number(userId));
            setProducts(filteredProducts);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setOpenSnackbar(true);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSendReport = async () => {
        const token = sessionStorage.getItem('jwtToken');

        if (!email) {
            setMessage('Email is required');
            setOpenSnackbar(true);
            return;
        }

        if (!validateEmail(email)) {
            setMessage('Please enter a valid email address');
            setOpenSnackbar(true);
            return;
        }

        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await fetch('http://localhost:5000/send-report', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error}`);
                setOpenSnackbar(true);
                return;
            }

            setMessage('Email sent successfully!');
            setEmail('');
            setOpenSnackbar(true);
        } catch (error) {
            setMessage(`Error: ${error.message}`);
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <Container maxWidth="sm" className="email-report-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
            
            <Typography variant="h4" align="center" gutterBottom>
                Send Product Report
            </Typography>
            <TextField
                label="Enter your email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={handleEmailChange}
                error={!!message && message.includes('Email')}
                helperText={!!message && message.includes('Email') ? message : ''}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSendReport}
            >
                Send Report
            </Button>
            
            <Button variant="outlined" color="secondary" onClick={handleBack} style={{ marginBottom: '20px' }}>
                Back
            </Button>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={message.includes('Error') ? 'error' : 'success'}>
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default EmailReport;
