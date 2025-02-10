import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  CircularProgress,
  IconButton,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: '20px',
  borderRadius: '12px',
  boxShadow: theme.shadows[3],
}));

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const apiUrl = 'http://localhost:5000/products';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
        const storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCartItems(storedCart);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  const clearCart = () => {
    sessionStorage.removeItem('cart');
    setCartItems([]);
  };

  const removeItem = async (id) => {
    // Find the product in the cart
    const product = products.find((product) => product.id === id);
    if (product) {
      // Update the stock in the database
      try {
        await axios.put(`${apiUrl}/${id}`, { stock: product.stock + 1 }); // Increment stock
        setProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.id === id ? { ...prod, stock: prod.stock + 1 } : prod
          )
        );
      } catch (error) {
        console.error('Error updating stock:', error);
      }
    }

    // Remove item from cart
    setCartItems((prevItems) => prevItems.filter((item) => item !== id));

    // Show snackbar
    setSnackbarMessage('Item removed from cart');
    setSnackbarOpen(true);
  };

  // Calculate total price and item quantities
  const itemQuantities = cartItems.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const totalPrice = cartItems.reduce((total, id) => {
    const product = products.find((product) => product.id === id);
    const price = product ? product.price : 0;
    return total + (typeof price === 'number' ? price : 0);
  }, 0);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" component="h2" align="center" style={{ color: '#3f51b5' }}>
        Checkout
      </Typography>
      
      <StyledCard>
        <CardContent>
          <Typography variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
            Your Cart Items
            <IconButton onClick={clearCart} style={{ marginLeft: '10px' }} title="Clear Cart">
              <ClearIcon color="error" />
            </IconButton>
          </Typography>
          <Divider style={{ marginBottom: '20px' }} />
          <List>
            {Object.keys(itemQuantities).map((id) => {
              const product = products.find((product) => product.id === id);
              const quantity = itemQuantities[id];
              return product ? (
                <ListItem key={product.id} secondaryAction={
                  <IconButton edge="end" onClick={() => removeItem(product.id)} title="Remove from cart">
                    <ClearIcon color="error" />
                  </IconButton>
                }>
                  <ListItemText
                    primary={`${product.name} (x${quantity})`}
                    secondary={`Price: $${(Number(product.price) * quantity).toFixed(2)}`}
                  />
                </ListItem>
              ) : null;
            })}
          </List>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6" align="right">
            Total Price: <strong>${totalPrice.toFixed(2)}</strong>
          </Typography>
        </CardContent>
      </StyledCard>

      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            style={{ width: '100%', borderRadius: '8px', fontWeight: 'bold' }}
          >
            Proceed to Checkout
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </div>
  );
};

export default Checkout;
