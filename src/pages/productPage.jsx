import products from '../data/products.json';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import { useCart } from '../App';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {addToCart } =  useCart()
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id)) || products[0];
    setProduct(foundProduct);
    setSelectedImage(0);
    setSelectedSize(foundProduct.sizes[0]);
    setSelectedColor(foundProduct.colors[0]?.id || 'black');
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return
     addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: product.images?.[selectedImage] || product.image,
    });


    

    setTimeout(() => {
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }, 500);
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (!product) return <div>Loading...</div>;

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  const reviews = [
    { 
      name: 'Priya Sharma', 
      date: '15 January 2025', 
      rating: 5,
      text: 'Absolutely love this tee! The fabric is so soft and breathable. Perfect fit and the quality is outstanding. Worth every rupee!'
    },
    { 
      name: 'Arjun Patel', 
      date: '10 January 2025', 
      rating: 4,
      text: 'Great quality t-shirt. The organic cotton feels premium. Only minor issue is it shrank slightly after first wash, but still fits well.'
    },
    { 
      name: 'Sanya Gupta', 
      date: '5 January 2025', 
      rating: 5,
      text: 'This is my third purchase from ThreadVerse. Consistently excellent quality. The minimal design is exactly what I was looking for!'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
        aria-hidden="true"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ));
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-sm text-gray-600">
            <a href="/" className="hover:text-[#D4A574]">Home</a>
            <span className="mx-2">&gt;</span>
            <a href="/products" className="hover:text-[#D4A574]">All Products</a>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">

          <div className="lg:order-2">
            <div className="aspect-3/4 rounded-lg overflow-hidden bg-gray-100 mb-6 lg:mb-0">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all w-20 h-20 ${
                    selectedImage === index
                      ? 'border-[#D4A574] ring-2 ring-[#D4A574]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:order-1">
            <div className="text-xs text-[#D4A574] uppercase tracking-wide mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl lg:text-4xl font-light mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="text-xl ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">
              ₹{product.price}
            </div>

            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`px-4 py-2 border-2 rounded-full transition-all text-sm font-medium ${
                      selectedSize === size
                        ? 'bg-brand-black text-white border-brand-black shadow-md'
                        : 'border-gray-300 hover:border-brand-black hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Color</label>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.id}
                    className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                      selectedColor === color.id
                        ? 'border-[#D4A574] shadow-lg'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    onClick={() => setSelectedColor(color.id)}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-1">
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                  onClick={decrementQuantity}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                  onClick={incrementQuantity}
                  disabled={quantity === 10}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className={`w-full py-4 px-8 rounded-lg text-lg font-medium transition-all duration-200 flex items-center justify-center gap-3 ${
                addedToCart
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-brand-black hover:bg-[#2C2C2C] text-white shadow-lg hover:shadow-xl active:scale-95'
              }`}
              onClick={handleAddToCart}
              disabled={!product.available}
            >
              {addedToCart ? (
                <>✓ Added to Cart</>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 3.5A2 2 0 005.5 18H21v-2H6a2 2 0 00-2-2zM7 13l-1.5 3.5A2 2 0 005.5 18H21"
                    />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">Product Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 100% Organic Cotton</li>
                <li>• Relaxed fit, true to size</li>
                <li>• Pre-shrunk, machine washable</li>
                <li>• Made in India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl mb-6">Description</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our signature minimal tee crafted from 100% organic cotton. Perfect for everyday wear with a relaxed fit and premium feel. Designed in Mumbai, made sustainably.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <span className="text-lg">{review.name}</span>
                    <span className="text-xs bg-brand-green text-white px-2 py-1 rounded">Verified Purchase</span>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl lg:text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map(relatedProduct => (
              <a
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                data-discover="true"
              >
                <div className="aspect-3/4 overflow-hidden bg-gray-100">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 lg:p-6">
                  <div className="text-xs text-[#D4A574] mb-1">{relatedProduct.category}</div>
                  <h3 className="text-lg mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{relatedProduct.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({relatedProduct.reviews})</span>
                  </div>
                  <span className="text-xl">₹{relatedProduct.price}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProductPage;
