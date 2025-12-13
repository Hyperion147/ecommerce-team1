import './App.css';
import React, { useState, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Products from './pages/Products.jsx';
import Navbar from './components/navbar.jsx';
import Layout from './pages/home.jsx';
import ProductPage from './pages/productPage.jsx';
import Cart from './pages/cart.jsx';

const CartContext = createContext(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartContext.Provider');
  }
  return context;
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log('Adding to cart:', item);
    setCartItems((prev) => {
       console.log('Prev cart:', prev);     
      const existingIndex = prev.findIndex(
        (i) => i.id === item.id && i.size === item.size && i.color === item.color
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id, size, color) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  const updateQuantity = (id, size, color, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartCount = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
  };

  return (
    <CartContext.Provider value={cartValue}>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </>
    </CartContext.Provider>
  );
}

export default App;
