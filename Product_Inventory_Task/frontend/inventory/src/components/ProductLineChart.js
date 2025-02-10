import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductLineChart = () => {
  const [productData, setProductData] = useState([]);
  const apiUrl = 'http://localhost:5000/products'; // Update with your API URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const token = sessionStorage.getItem('jwtToken'); // Retrieve the token from session storage
      const userId = sessionStorage.getItem('userId'); // Retrieve userId from session storage

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        // Log the fetched data for debugging
        console.log('Fetched product data:', response.data);

        // Filter products by userId
        const filteredProducts = response.data.filter(product => product.user_id === Number(userId));
        setProductData(filteredProducts);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  // Prepare data for the line chart
  const lineChartData = productData.map((product) => ({
    name: product.name,
    stock: product.stock_quantity,
    price: product.price,
  }));

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'linear-gradient(to right, #A7C6ED, #B9E9D8)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        margin: '20px auto',
        maxWidth: '800px',
      }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: 4, color: '#333', fontWeight: 'bold' }}>
        Product Stock and Price Over Time
      </Typography>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="stock" 
            stroke={lineChartData.some(data => data.stock < 10) ? "red" : "#8884d8"} 
            activeDot={{ r: 8 }} 
            name="Stock Quantity" 
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#82ca9d" 
            name="Price" 
          />
        </LineChart>
      </ResponsiveContainer>

      <Button 
        variant="outlined" 
        sx={{ mt: 4, color: '#333', borderColor: '#333', '&:hover': { backgroundColor: '#333', color: '#fff' } }} 
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Back
      </Button>
    </Box>
  );
};

export default ProductLineChart;
