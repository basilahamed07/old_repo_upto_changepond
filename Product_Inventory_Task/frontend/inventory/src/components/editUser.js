import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    role: '',
  });
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Fetch user data if ID is present (edit mode)
  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:5000/users/${id}`);
          setUser(response.data);
        } catch (err) {
          setError('Failed to fetch user details');
        }
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Validation checks
    if (!user.username || !user.role) {
      setError('All fields are required');
      return;
    }

    try {
      // Update the user
      await axios.put(`http://localhost:5000/users/${id}`, user);
      setOpenSnackbar(true);
      setTimeout(() => navigate('/users'), 2000);
    } catch (err) {
      setError('Failed to update user');
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
        Edit User
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
          Update User
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
        <Alert severity="success">User updated successfully!</Alert>
      </Snackbar>
    </Box>
  );
};

export default EditUser;
