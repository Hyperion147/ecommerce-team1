import React from 'react';
import Footer from '../components/footer.jsx';

import products from '../data/products.json';
function Products() {


  return (
    <>
      <div className="pt-16 lg:pt-20 min-h-screen">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-sm text-gray-600">
              <a href="/" className="hover:text-[#D4A574]" data-discover="true">
                Home
              </a>
              <span className="mx-2">&gt;</span>
              <span className="text-gray-900">All Products</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl lg:text-5xl mb-2">All Products</h1>
              <p className="text-gray-600">{products.length} products found</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-brand-black cursor-pointer">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popularity">Most Popular</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <button className="lg:hidden p-2 border border-gray-300 rounded hover:bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sliders-horizontal w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M10 5H3" />
                  <path d="M12 19H3" />
                  <path d="M14 3v4" />
                  <path d="M16 17v4" />
                  <path d="M21 12h-9" />
                  <path d="M21 19h-5" />
                  <path d="M21 5h-7" />
                  <path d="M8 10v4" />
                  <path d="M8 12H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg mb-4">Categories</h3>
                    <div className="space-y-2">
                      <button className="block w-full text-left px-4 py-2 rounded transition-colors bg-brand-black text-white">
                        All Products
                      </button>
                      <button className="block w-full text-left px-4 py-2 rounded transition-colors hover:bg-gray-100">
                        Essentials
                      </button>
                      <button className="block w-full text-left px-4 py-2 rounded transition-colors hover:bg-gray-100">
                        Graphic Tees
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-4">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <button
                          key={size}
                          className="px-4 py-2 border rounded transition-colors border-gray-300 hover:border-brand-black"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-4">Color</h3>
                    <div className="flex flex-wrap gap-3">
                      <button
                        className="w-10 h-10 rounded-full border-2 transition-all border-gray-300 hover:scale-105"
                        title="Black"
                        style={{ backgroundColor: 'rgb(26, 26, 26)' }}
                      />
                      <button
                        className="w-10 h-10 rounded-full border-2 transition-all border-gray-300 hover:scale-105"
                        title="White"
                        style={{ backgroundColor: 'rgb(255, 255, 255)' }}
                      />
                      <button
                        className="w-10 h-10 rounded-full border-2 transition-all border-gray-300 hover:scale-105"
                        title="Olive"
                        style={{ backgroundColor: 'rgb(85, 107, 47)' }}
                      />
                      <button
                        className="w-10 h-10 rounded-full border-2 transition-all border-gray-300 hover:scale-105"
                        title="Brick Red"
                        style={{ backgroundColor: 'rgb(212, 165, 116)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="100"
                        className="w-full accent-brand-black"
                        defaultValue="2000"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>₹0</span>
                        <span>₹2000</span>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white active:scale-95 px-6 py-3 text-base w-full">
                    Reset Filters
                  </button>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {products.map(product => (
                  <a
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                    data-discover="true"
                  >
                    <div className="aspect-3/4 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 lg:p-6">
                      <div className="text-xs text-[#D4A574] mb-1">{product.category}</div>
                      <h3 className="text-lg mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl">₹{product.price}</span>
                        <div className="flex gap-1">
                          {product.sizes.map(size => (
                            <span key={size} className="px-2 py-1 bg-gray-100 text-xs rounded">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-black text-white hover:bg-[#2C2C2C] active:scale-95 px-4 py-2 text-sm w-full mt-4 opacity-0 group-hover:opacity-100">
                        Quick View
                      </button>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;

