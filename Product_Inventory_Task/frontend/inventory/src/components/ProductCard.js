import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className={`border rounded p-4 transition duration-300 ${product.stock_quantity < 10 ? 'border-red-500 bg-red-100' : 'border-gray-300'}`}>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-semibold">Price: <span className="text-blue-600">${product.price}</span></p>
      <p className="font-semibold">Stock: <span className={product.stock_quantity < 10 ? 'text-red-600' : 'text-green-600'}>{product.stock_quantity}</span></p>
      {product.stock_quantity < 10 && <span className="text-red-500 font-semibold">Low Stock!</span>}
      <p className="font-semibold">Category: {product.category}</p>
      <div className="mt-2">
        <Link to={`/edit/${product.id}`} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</Link>
        <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
