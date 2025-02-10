import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
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
  Tooltip,
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
import WarningIcon from '@mui/icons-material/Warning';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { useNavigate } from 'react-router-dom';

const ProductListTable = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [deletingProductId, setDeletingProductId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openStockDialog, setOpenStockDialog] = useState(false);
  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const token = sessionStorage.getItem('jwtToken');
    const userId = sessionStorage.getItem('userId');
    console.log('User ID from session:', userId); // Debug line
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Fetched products:', response.data); // Debug line
      const userProducts = response.data.filter(product => product.user_id === Number(userId));
      console.log('Filtered products:', userProducts); // Debug line
      setProducts(userProducts);
      const lowStock = userProducts.filter(product => product.stock_quantity < 10);
      setLowStockProducts(lowStock);
    } catch (error) {
      console.error('Error fetching products:', error);
      setSnackbarMessage('Failed to fetch products. Please try again later.');
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    setDeletingProductId(id);
    setOpenDialog(true);
  };

  const confirmDelete = async () => {
    const token = sessionStorage.getItem('jwtToken');
    try {
      await axios.delete(`http://localhost:5000/products/${deletingProductId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSnackbarMessage('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      setSnackbarMessage('Failed to delete product. Please try again.');
    } finally {
      setOpenDialog(false);
      setDeletingProductId(null);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleLogout = () => {
    setOpenLogoutDialog(true);
  };

  const confirmLogout = () => {
    sessionStorage.clear();
    navigate('/login');
    setOpenLogoutDialog(false);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpenEditDialog(true);
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
          Product List
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout} sx={{ borderRadius: '20px', color: '#00695c', borderColor: '#004d40' }}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </Button>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Search by Name"
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
        <Tooltip title="Low Stock Products" arrow>
          <IconButton color="primary" onClick={() => setOpenStockDialog(true)}>
            <NotificationsIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Button variant="contained" color="success" onClick={() => setOpenAddProductDialog(true)} sx={{ borderRadius: '20px', boxShadow: 2 }}>
          Add Product
        </Button>
      </Box>

      {/* Scrollable Table Container */}
      <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
        <TableContainer component={Paper} elevation={6} sx={{ borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Image</strong></TableCell>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Price</strong></TableCell>
                <TableCell><strong>Stock</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">Loading...</TableCell>
                </TableRow>
              ) : filteredProducts.map((product) => (
                <TableRow key={product.id} sx={{ backgroundColor: product.stock_quantity < 10 ? '#ffebee' : 'white', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#f1f1f1' } }}>
                  <TableCell>
                    {product.image_url && (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    )}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${Number(product.price).toFixed(2)}</TableCell>
                  <TableCell>
                    {product.stock_quantity}
                    {product.stock_quantity < 10 && (
                      <span style={{ display: 'flex', alignItems: 'center', color: 'red', marginLeft: '4px' }}>
                        <WarningIcon fontSize="small" />
                        <span>(Low Stock!)</span>
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit" arrow>
                      <IconButton color="warning" onClick={() => handleEdit(product)} aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                      <IconButton color="error" onClick={() => handleDelete(product.id)} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete} color="error">Yes, Delete</Button>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openStockDialog} onClose={() => setOpenStockDialog(false)}>
        <DialogTitle>Low Stock Products</DialogTitle>
        <DialogContent>
          {lowStockProducts.length > 0 ? (
            <Table>
              <TableBody>
                {lowStockProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      {product.image_url && (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                      )}
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.stock_quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <DialogContentText>No low stock products available.</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenStockDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {openAddProductDialog && <AddProduct onClose={() => setOpenAddProductDialog(false)} />}

      {openEditDialog && (
        <EditProduct
          open={openEditDialog}
          onClose={() => setOpenEditDialog(false)}
          product={selectedProduct}
          onUpdate={fetchProducts} // Refresh products after update
        />
      )}

      <Dialog open={openLogoutDialog} onClose={() => setOpenLogoutDialog(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
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

export default ProductListTable;
