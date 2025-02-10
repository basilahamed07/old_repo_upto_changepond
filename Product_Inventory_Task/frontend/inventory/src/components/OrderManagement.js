// OrderManagement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState('');

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/orders/user/${userId}`);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders', error);
        }
    };

    const createOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5000/orders', {
                user_id: userId,
                product_id: productId,
                quantity: quantity,
            });
            alert('Order created successfully');
            fetchOrders();
        } catch (error) {
            console.error('Error creating order', error);
        }
    };

    const updateOrder = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/orders/${orderId}`, {
                quantity: quantity,
                status: status,
            });
            alert('Order updated successfully');
            fetchOrders();
        } catch (error) {
            console.error('Error updating order', error);
        }
    };

    const deleteOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/orders/${id}`);
            alert('Order deleted successfully');
            fetchOrders();
        } catch (error) {
            console.error('Error deleting order', error);
        }
    };

    useEffect(() => {
        if (userId) fetchOrders();
    }, [userId]);

    return (
        <div>
            <h2>Order Management</h2>

            <div>
                <h3>Create Order</h3>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button onClick={createOrder}>Create Order</button>
            </div>

            <div>
                <h3>Update Order</h3>
                <input
                    type="text"
                    placeholder="Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="New Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <button onClick={updateOrder}>Update Order</button>
            </div>

            <h3>Your Orders</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order ID: {order.id}, Quantity: {order.quantity}, Status: {order.status}
                        <button onClick={() => deleteOrder(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;
