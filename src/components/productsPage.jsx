import React, { useState } from "react";
import ProductCard from "./productCard";
import productsData from "../data/products.json";
import Navbar from "./navbar";

const ProductsPage = () => {
  const [products] = useState(productsData);
  const [sortType, setSortType] = useState("");

  // FILTER STATES
  const [category, setCategory] = useState("All");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(2000);

  const filteredProducts = products.filter((product) => {
    if (category !== "All" && product.category !== category) return false;
    if (size && !product.sizes.includes(size)) return false;
    if (color && !product.colors.some((c) => c.hex === color)) return false;
    if (product.price > price) return false;

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "low-high") return a.price - b.price;
    if (sortType === "high-low") return b.price - a.price;
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  const resetFilters = () => {
    setCategory("All");
    setSize("");
    setColor("");
    setPrice(2000);
  };

  return (
    <>
    <Navbar />
    {/* mini nav */}
            <div className="bg-white border-b mt-20 border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="text-sm text-gray-600">
                        <a href="/" className="hover:text-[#D4A574]">Home</a>
                        <span className="mx-2">&gt;</span>
                        <a href="/products" className="hover:text-[#D4A574]">Products</a>
                    </div>
                    </div>
                </div>
    <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* FILTER SIDEBAR */}
      <aside className="hidden lg:block p-6 h-fit sticky top-5">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold mb-4">All Products</h1>
          <span className="text-base text-gray-500">
            {filteredProducts.length} products found
          </span>
        </div>

        {/* CATEGORY */}
        <div className="mb-6">
          <h3 className="font-medium text-xl mb-2">Categories</h3>
          {["All", "Essentials", "Graphic Tees"].map((cat) => (
            <p
              key={cat}
              onClick={() => setCategory(cat)}
              className={`cursor-pointer rounded-lg mb-1 p-2 ${
                category === cat
                  ? "font-semibold bg-black text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* SIZE */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-3 py-1 rounded border text-sm ${
                  size === s ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex gap-3 flex-wrap">
            {products
              .flatMap((p) => p.colors)
              .filter(
                (c, i, arr) =>
                  i === arr.findIndex((x) => x.hex === c.hex)
              )
              .map((c) => (
                <div
                  key={c.hex}
                  onClick={() => setColor(c.hex)}
                  className={`w-8 h-8 rounded-full cursor-pointer border ${
                    color === c.hex
                      ? "border-black scale-110"
                      : "border-gray-400"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="2000"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="w-full"
          />
          <p>Up to ₹{price}</p>
        </div>

        <button
          onClick={resetFilters}
          className="w-full mt-3 py-2 border rounded-lg hover:bg-black hover:text-white transition"
        >
          Reset Filters
        </button>
      </aside>

      {/* PRODUCTS */}
      <div className="mt-10 lg:col-span-3">

        {/* sorting */}
        <div className="flex justify-end mb-5">
          <select
            className="border p-2 rounded-lg"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Newest</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="rating">Rating: High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>


      </div>
    </div>
    </>
  );
};

export default ProductsPage;
