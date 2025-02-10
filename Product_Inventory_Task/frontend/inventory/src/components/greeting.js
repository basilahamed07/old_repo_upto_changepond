import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Greeting = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get the username from session storage
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        background: 'linear-gradient(to right, #A1C6EA, #B3E0F2)', // Light blue gradient background
        color: '#333', // Darker text for contrast
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
        {username ? `Happy to see you, ${username}!` : 'Welcome!'}
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        We're glad you're here. Enjoy your stay!
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', opacity: 0.8, mb: 2 }}>
        Explore our amazing products and offers.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '1rem', fontStyle: 'italic', color: '#555', mb: 4 }}>
        🚧 We're currently under construction. Stay tuned for updates! 🚧
      </Typography>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)} // Go back to the previous page
        sx={{ borderRadius: '8px', color: '#333', borderColor: '#333' }}
      >
        Back
      </Button>
    </Box>
  );
};

export default Greeting;
