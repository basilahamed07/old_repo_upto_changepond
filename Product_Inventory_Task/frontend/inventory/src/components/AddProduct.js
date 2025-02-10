import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  DialogContentText,
} from '@mui/material';

const AddProductForm = ({ onClose }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock_quantity: '',
    category: '',
    description: '',
    brand: '',
    image_url: '',
  });

  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [existingProducts, setExistingProducts] = useState([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [userId, setUserId] = useState(''); // State for user ID

  useEffect(() => {
    // Fetch user ID from session storage
    const id = sessionStorage.getItem('userid'); // Ensure the key matches what's stored
    setUserId(id);

    const fetchProducts = async () => {
      const token = sessionStorage.getItem('jwtToken');
      try {
        const response = await axios.get('http://localhost:5000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setExistingProducts(response.data.map(prod => prod.name.toLowerCase()));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!product.name || !product.price || !product.stock_quantity || !product.category) {
      setError('All fields are required');
      return;
    }
    if (existingProducts.includes(product.name.toLowerCase())) {
      setError('Product name already exists');
      return;
    }
    if (parseFloat(product.price) < 500) {
      setError('Price must be at least 500');
      return;
    }
    if (parseInt(product.stock_quantity) < 5) {
      setError('Stock quantity must be at least 5');
      return;
    }

    try {
      const token = sessionStorage.getItem('jwtToken');
      
      // Include userId in the product payload
      const payload = {
        ...product,
        user_id: userId, // Add userId to the payload (ensure your backend expects user_id)
      };

      await axios.post('http://localhost:5000/products', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOpenSnackbar(true);
      resetForm(); // Reset the form after successful submission
      onClose(); // Close dialog after success
    } catch (err) {
      setError('Failed to add product');
    }
  };

  const resetForm = () => {
    setProduct({
      name: '',
      price: '',
      stock_quantity: '',
      category: '',
      description: '',
      brand: '',
      image_url: '',
    });
    setTouchedFields({}); // Reset touched fields
    setUserId(''); // Reset user ID
  };

  const handleExit = () => {
    setOpenConfirmDialog(true);
  };

  const handleConfirmExit = () => {
    setOpenConfirmDialog(false);
    onClose();
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Close the snackbar
  };

  return (
    <Dialog open onClose={handleExit} maxWidth="md" fullWidth>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label="Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!product.name && touchedFields.name}
            helperText={!product.name && touchedFields.name ? 'Name is required' : ''}
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={parseFloat(product.price) < 500 && touchedFields.price}
            helperText={parseFloat(product.price) < 500 && touchedFields.price ? 'Price must be at least 500' : ''}
          />
          <TextField
            label="Stock Quantity"
            name="stock_quantity"
            type="number"
            value={product.stock_quantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={parseInt(product.stock_quantity) < 5 && touchedFields.stock_quantity}
            helperText={parseInt(product.stock_quantity) < 5 && touchedFields.stock_quantity ? 'Stock quantity must be at least 5' : ''}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={product.category}
              onChange={handleChange}
              error={!product.category && touchedFields.category}
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="Games">Games</MenuItem>
              <MenuItem value="Laptops">Laptops</MenuItem>
              <MenuItem value="VR Games">VR Games</MenuItem>
              <MenuItem value="Console">Console</MenuItem>
            </Select>
            {!product.category && touchedFields.category && <Alert severity="error">Category is required</Alert>}
          </FormControl>
          <TextField
            label="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Product
          </Button>
        </form>
      </DialogContent>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Product added successfully!
        </Alert>
      </Snackbar>

      <DialogActions>
        <Button onClick={handleExit} color="secondary">Exit</Button>
      </DialogActions>

      {/* Confirmation Dialog for Exit */}
      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
      >
        <DialogTitle>Confirm Exit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to exit without saving changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">Cancel</Button>
          <Button onClick={handleConfirmExit} color="secondary">Yes, Exit</Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default AddProductForm;
