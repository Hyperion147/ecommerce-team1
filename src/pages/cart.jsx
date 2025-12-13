
import React, { useState } from "react";
import { getCart, removeFromCart } from "../utils/cart";
import Navbar from "../components/navbar";
import { Trash2, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => getCart());

  const updateQuantity = (index, type) => {
    const updatedCart = [...cartItems];

    if (!updatedCart[index].quantity) {
      updatedCart[index].quantity = 1;
    }

    if (type === "inc") {
      updatedCart[index].quantity += 1;
    }

    if (type === "dec" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // Promo code
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const tax = Math.round(subtotal * 0.05);
  const shipping = 0;

  const total = subtotal + tax + shipping - discount;

  const applyPromo = () => {
    if (promoCode === "THREAD10") {
      setDiscount(200);
      alert("Promo code applied! ₹200 OFF added.");
    } else {
      setDiscount(0);
      alert("Invalid promo code. Please try again.");
    }
  };

  if (cartItems.length === 0) {
    return <>
      <Navbar />

    <div className="pt-16 lg:pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-3xl lg:text-4xl mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Looks like you haven{"'"}t added anything to your cart yet. Start shopping now!
            </p>
            {/* <Link to="/products"> */}
              {/* <Button size="lg">Browse Collection</Button> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
    
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-20 p-6">
        <div className="flex">
          <div className="w-2/3 flex flex-col">
            <h1 className="text-6xl mb-6">Shopping Cart</h1>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center shadow-xl gap-6 border-none rounded-xl m-5 px-5 py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Size: {item.size} | Color: {item.color.name}
                  </p>
                  <p className="font-semibold">
                    ₹{item.price * (item.quantity || 1)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(index, "dec")}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="font-medium">{item.quantity || 1}</span>

                    <button
                      onClick={() => updateQuantity(index, "inc")}
                      className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="text-red-500 text-sm"
                  onClick={() => {
                    removeFromCart(index);
                    setCartItems(getCart());
                  }}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div>
            <div className="1/3 mt-20 ml-20 space-y-6">
              {/* Order Summary */}
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                {/* Promo Code */}
                <div>
                  <h2 className="text-xl font-semibold mb-3">Promo Code</h2>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 border px-4 py-2 rounded"
                    />
                    <button
                      onClick={applyPromo}
                      className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Try <span className="font-medium">THREAD10</span> for ₹200
                    off
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>₹{tax}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}

                  <hr />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
