import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  AppBar,
  Toolbar,
  Container,
  CssBaseline,
} from '@mui/material';
import Sidebar from './sidenav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buy = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const apiUrl = 'http://localhost:5000/products';

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleBuyClick = (product) => {
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    existingCart.push(product.id);
    sessionStorage.setItem('cart', JSON.stringify(existingCart));
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleConfirmBuy = async () => {
    if (selectedProduct) {
      const updatedStock = selectedProduct.stock_quantity - 1;
      try {
        await axios.put(`${apiUrl}/${selectedProduct.id}`, {
          ...selectedProduct,
          stock_quantity: updatedStock,
        });
        fetchProducts();
        toast.success('Product purchased successfully!');
      } catch (error) {
        console.error('Error updating stock:', error);
      } finally {
        setOpenDialog(false);
      }
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  return (
    <Container component="main" maxWidth={false} className="h-screen flex flex-col">
      <CssBaseline />
      <AppBar position="static" className="bg-indigo-600">
        <Toolbar>
          <Typography variant="h5" className="text-white flex-grow">
            Test Buy Products
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="flex flex-grow p-4">
        <Sidebar
          categories={[
            { value: '', label: 'All Products' },
            { value: 'games', label: 'Games' },
            { value: 'vrGames', label: 'VR Games' },
            { value: 'laotpns', label: 'LAOTPNs' },
            { value: 'videoGames', label: 'Video Games' },
          ]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="flex-grow pl-4 overflow-y-auto">
          <Grid container spacing={3}>
            {products
              .filter(
                (product) =>
                  product.stock_quantity > 0 &&
                  (selectedCategory === '' || product.category === selectedCategory)
              )
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card className="transition-transform transform hover:scale-105 shadow-lg rounded-lg">
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image_url}
                      alt={product.name}
                      className="object-cover rounded-t-lg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" className="font-bold">
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="primary" className="font-semibold">
                        Price: ${Number(product.price).toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Stock: {product.stock_quantity}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleBuyClick(product)}
                        className="w-full rounded-lg mt-2"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to buy {selectedProduct?.name}? This will reduce the stock by 1.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleConfirmBuy} color="secondary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>

          {/* Back Button at the bottom */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)} // Navigate back
            className="mt-4 w-full rounded-lg"
          >
            Back
          </Button>

          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
      </div>
    </Container>
  );
};

export default Buy;
