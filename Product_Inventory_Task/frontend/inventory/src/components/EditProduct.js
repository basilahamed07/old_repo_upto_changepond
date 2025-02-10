import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';

const EditProduct = ({ open, onClose, product }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const token = sessionStorage.getItem('jwtToken');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setStockQuantity(product.stock_quantity);
      setCategory(product.category);
      setDescription(product.description || '');
      setImageUrl(product.image_url || '');
    }
  }, [product]);

  const handleSubmit = async () => {
    // Validation
    if (!name || !price || !stockQuantity || !category || !imageUrl) {
      setSnackbarMessage('All fields are required.');
      setSnackbarOpen(true);
      return;
    }

    if (price <= 0 || stockQuantity < 0) {
      setSnackbarMessage('Price must be greater than 0 and stock quantity cannot be negative.');
      setSnackbarOpen(true);
      return;
    }

    try {
      await axios.put(`http://localhost:5000/products/${product.id}`, {
        name,
        price,
        stock_quantity: stockQuantity,
        category,
        description,
        image_url: imageUrl,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSnackbarMessage('Product updated successfully.');
      setSnackbarOpen(true);

      // Delay closing the dialog to allow the snackbar to show
      setTimeout(() => {
        onClose(); // Close the dialog
      }, 2000);
    } catch (error) {
      console.error('Error updating product:', error);
      setSnackbarMessage('Error updating product.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            error={!name}
            helperText={!name ? 'Name is required.' : ''}
          />
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            error={price <= 0}
            helperText={price <= 0 ? 'Price must be greater than 0.' : ''}
          />
          <TextField
            label="Stock Quantity"
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            fullWidth
            margin="normal"
            error={stockQuantity < 0}
            helperText={stockQuantity < 0 ? 'Stock quantity cannot be negative.' : ''}
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
            error={!category}
            helperText={!category ? 'Category is required.' : ''}
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            label="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            fullWidth
            margin="normal"
            error={!imageUrl}
            helperText={!imageUrl ? 'Image URL is required.' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarMessage.includes('Error') ? 'error' : 'success'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EditProduct;
