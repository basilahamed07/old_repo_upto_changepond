import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ product, refreshProducts }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock_quantity: '',
    category: '',
  });
  const [errors, setErrors] = useState({});
  
  const categories = ["Console", "Video Games", "VR Equipment", "Gaming Laptops"];

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock_quantity: product.stock_quantity,
        category: product.category,
      });
    } else {
      setFormData({
        name: '',
        price: '',
        stock_quantity: '',
        category: '',
      });
    }
  }, [product]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Product name is required.";
    if (!formData.price || formData.price <= 0) tempErrors.price = "Price must be a positive number.";
    if (!formData.stock_quantity || formData.stock_quantity < 0) tempErrors.stock_quantity = "Stock quantity cannot be negative.";
    if (!formData.category) tempErrors.category = "Category is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error for the changed field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (product) {
          await axios.put(`http://localhost:5000/products/${product.id}`, formData);
        } else {
          await axios.post('http://localhost:5000/products', formData);
        }
        refreshProducts();
        navigate('/products'); // Navigate to the product list page
      } catch (error) {
        console.error("Error saving product:", error);
        setErrors({ submit: "There was an error saving the product." });
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f8ff',
        padding: 2,
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {product ? 'Update Product' : 'Add New Product'}
        </Typography>
        
        {errors.submit && (
          <Alert severity="error" sx={{ marginBottom: 2 }}>
            {errors.submit}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Product Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.price}
            helperText={errors.price}
          />
          <TextField
            name="stock_quantity"
            label="Stock Quantity"
            type="number"
            value={formData.stock_quantity}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.stock_quantity}
            helperText={errors.stock_quantity}
          />
          <FormControl fullWidth margin="normal" required error={!!errors.category}>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            {errors.category && <Typography color="error">{errors.category}</Typography>}
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {product ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;
