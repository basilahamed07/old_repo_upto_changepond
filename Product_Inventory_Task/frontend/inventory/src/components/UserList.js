import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Typography,
  IconButton,
  Button,
  Box,
  Tooltip,
  Pagination,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';

const UserListTable = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false); // New state for logout dialog
  
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    role: '',
  });

  const itemsPerPage = 3;
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    setDeletingUserId(id);
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    await axios.delete(`http://localhost:5000/users/${deletingUserId}`);
    setOpenSnackbar(true);
    setSnackbarMessage('User deleted successfully');
    fetchUsers();
    setDeletingUserId(null);
    setOpenDialog(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(filter.toLowerCase()) &&
    user.username.toLowerCase() !== 'admin'
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true); // Open logout confirmation dialog
  };

  const confirmLogout = () => {
    sessionStorage.removeItem('token'); // Clear session storage
    navigate('/login'); // Navigate to login
  };

  const handleAddUser = async () => {
    const { username, password, role } = newUser;
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    setErrors({ username: '', password: '', role: '' });
    let isValid = true;

    if (!usernameRegex.test(username)) {
      setErrors(prev => ({ ...prev, username: 'Username can only contain letters and numbers.' }));
      isValid = false;
    }
    if (!password) {
      setErrors(prev => ({ ...prev, password: 'Password is required.' }));
      isValid = false;
    }
    if (!role) {
      setErrors(prev => ({ ...prev, role: 'Role is required.' }));
      isValid = false;
    }

    if (!isValid) {
      setOpenSnackbar(true);
      setSnackbarMessage('Please fix the errors before submitting.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/register', { username, password, role });
      setOpenSnackbar(true);
      setSnackbarMessage('User created successfully');
      fetchUsers();
      setNewUser({ username: '', password: '', role: '' });
      setOpenAddUserDialog(false);
    } catch (error) {
      setSnackbarMessage('Failed to create user.');
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        background: 'linear-gradient(to right, #E0F7FA, #B2EBF2)',
        minHeight: '100vh',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <IconButton onClick={() => navigate("/admin-dashboard")} sx={{ color: '#00695c' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h2" align="center" sx={{ flexGrow: 1, color: '#004d40', fontWeight: 'bold', letterSpacing: '1px' }}>
          User List
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout} sx={{ borderRadius: '20px', color: '#00695c', borderColor: '#004d40' }}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </Button>
      </Box>

      <TextField
        label="Search by Username"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setFilter(e.target.value)}
        sx={{
          input: { color: 'black' },
          label: { color: 'black' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00695c',
            },
            '&:hover fieldset': {
              borderColor: '#004d40',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#004d40',
            },
          },
        }}
      />

      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setOpenAddUserDialog(true)} 
        sx={{ borderRadius: '20px', boxShadow: 2, mb: 2 }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add User
      </Button>

      <TableContainer component={Paper} elevation={6} sx={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Username</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Tooltip title="Edit" arrow>
                    <Link to={`/edit-user/${user.id}`}>
                      <IconButton color="warning" aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <IconButton color="error" onClick={() => handleDelete(user.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(filteredUsers.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          sx={{ borderRadius: '20px' }}
        />
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">Yes, Delete</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAddUserDialog} onClose={() => setOpenAddUserDialog(false)}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            variant="outlined"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            error={Boolean(errors.role)}
            helperText={errors.role}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddUserDialog(false)}>Cancel</Button>
          <Button onClick={handleAddUser} color="primary">Add User</Button>
        </DialogActions>
      </Dialog>

      {/* Logout confirmation dialog */}
      <Dialog open={openLogoutDialog} onClose={() => setOpenLogoutDialog(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenLogoutDialog(false)}>Cancel</Button>
          <Button onClick={confirmLogout} color="primary">Yes, Logout</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserListTable;
