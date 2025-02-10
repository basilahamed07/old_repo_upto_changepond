  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import {
    TextField,
    Button,
    Box,
    Typography,
    Snackbar,
    Alert,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from '@mui/material';

  const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      username: '',
      password: '',
      role: '',
    });
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(''); // Reset error message

      // Validation checks
      if (!user.username || !user.password || !user.role) {
        setError('All fields are required');
        return;
      }

      try {
        await axios.post('http://localhost:5000/register', user);
        setOpenSnackbar(true);
        setTimeout(() => navigate('/users'), 1000);
      } catch (err) {
        setError('Failed to add user');
      }
    };

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
          minHeight: '100vh',
          background: 'linear-gradient(to right, #A7C6ED, #B9E9D8)',
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 4, color: '#333' }}>
          Add User
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '600px',
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Role</InputLabel>
                <Select
                  name="role"
                  value={user.role}
                  onChange={handleChange}
                >
                  <MenuItem value=""><em>Select a Role</em></MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
            Add User
          </Button>
        </form>

        <Button
          variant="outlined"
          sx={{ mt: 2, width: '100%' }}
          onClick={() => navigate('/users')}
        >
          Back to User List
        </Button>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
          <Alert severity="success">User added successfully!</Alert>
        </Snackbar>
      </Box>
    );
  };

  export default AddUser;
