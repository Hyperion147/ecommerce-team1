import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useCart } from '../App';
import {Button} from '../components/ui/button.jsx';
import { useState } from 'react';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'THREAD10') {
      setDiscount(200);
    } else if (promoCode) {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const shipping = subtotal >= 999 ? 0 : 50;
  const total = subtotal - discount + tax + shipping;

  if (cartItems.length === 0) {
    return (
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
            <Link to="/products">
              <Button size="lg">Browse Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-5xl mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${index}`}
                className="bg-white rounded-lg p-4 lg:p-6 flex gap-4 lg:gap-6 shadow-sm"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 mr-4">
                      <h3 className="text-lg lg:text-xl mb-1 truncate">{item.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span>Color: {item.color}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors shrink-0"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xl lg:text-2xl">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link to="/products">
              <Button variant="outline" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl mb-6">Order Summary</h2>

              <div className="mb-6">
                <label className="text-sm block mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-black"
                  />
                  <Button onClick={applyPromoCode} size="sm">
                    Apply
                  </Button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    Promo code applied! Saved ₹{discount}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2">
                  Try THREAD10 for ₹200 off
                </p>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                {subtotal < 999 && (
                  <p className="text-xs text-[#D4A574]">
                    Add ₹{999 - subtotal} more for free shipping!
                  </p>
                )}
              </div>

              <div className="flex justify-between text-xl lg:text-2xl mb-6">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <Button className="w-full mb-4" size="lg" >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
