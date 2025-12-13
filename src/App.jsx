// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Product from "./pages/product.jsx";
import ProductDetail from "./pages/productDetail.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Static pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product pages */}
        <Route path="/products" element={<Product />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
