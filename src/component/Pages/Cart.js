// 
import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const updateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div>
      <Breadcrumb />
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <p>Total: ${total.toFixed(2)}</p>

      <div>
        <h3>Available Products</h3>
        <button onClick={() => addToCart({ name: 'Product 1', price: 10.99 })}>
          Add Product 1 to Cart
        </button>
        <button onClick={() => addToCart({ name: 'Product 2', price: 19.99 })}>
          Add Product 2 to Cart
        </button>
        {/* Add more products and buttons as needed */}
      </div>
    </div>
  );
};

export default Cart;
