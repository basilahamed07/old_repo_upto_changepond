import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductListTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <button 
        onClick={() => navigate('/add-product')} 
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Product
      </button>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Stock</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border">{product.name}</td>
              <td className="py-2 px-4 border">${product.price}</td>
              <td className={`py-2 px-4 border ${product.stock_quantity < 10 ? 'text-red-600' : ''}`}>
                {product.stock_quantity} {product.stock_quantity < 10 && <span className="text-red-600 font-bold">Low Stock!</span>}
              </td>
              <td className="py-2 px-4 border">{product.category}</td>
              <td className="py-2 px-4 border">
                <Link to={`/edit/${product.id}`} className="bg-yellow-500 text-white p-1 rounded mr-1">Edit</Link>
                <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListTable;
