import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import ProductCard from "../components/productCard";
import { addToCart } from "../utils/cart";
import Footer from '../components/footer.jsx';
import Navbar from '../components/navbar.jsx';


const ProductDetail = () => {
    const { id } = useParams();

    const product = productsData.find((item) => item.id === Number(id));

    
    const relatedProducts = productsData
    .filter(
            (item) => item.category === product.category && item.id !== product.id
        )
        .slice(0, 4);

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

        if (!product) {
            return <p className="p-10 text-center">Loading...</p>;
        }

    const reviews = [
        {
            name: "Priya Sharma",
            date: "15 January 2025",
            rating: 5,
            text: "Absolutely love this tee! The fabric is so soft and breathable. Perfect fit and the quality is outstanding. Worth every rupee!",
        },
        {
            name: "Arjun Patel",
            date: "10 January 2025",
            rating: 4,
            text: "Great quality t-shirt. The organic cotton feels premium. Only minor issue is it shrank slightly after first wash, but still fits well.",
        },
        {
            name: "Sanya Gupta",
            date: "5 January 2025",
            rating: 5,
            text: "This is my third purchase from ThreadVerse. Consistently excellent quality. The minimal design is exactly what I was looking for!",
        },
    ];


    return (
        <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
            {/* mini nav */}
            <div className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="text-sm text-gray-600">
                        <a href="/" className="hover:text-[#D4A574]">Home</a>
                        <span className="mx-2">&gt;</span>
                        <a href="/products" className="hover:text-[#D4A574]">Products</a>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-900">{product.name}</span>
                    </div>
                    </div>
                </div>

            {/* ---------------- PRODUCT MAIN ---------------- */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                {/* Images */}
                <div >
                    <div className="h-[650px] w-full overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full rounded-xl object-cover transition-transform duration-500 ease-out hover:scale-110"
                        />
                    </div>

                    <div className="flex gap-4 mt-6">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setSelectedImage(img)}
                                className={`w-24 h-24 cursor-pointer rounded border-2 ${selectedImage === img ? "border-black" : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="w-1/2">
                    <p className="text-yellow-700">{product.category}</p>
                    <h1 className="text-4xl font-semibold">{product.name}</h1>

                    <p className="mt-2 text-gray-600">
                        ⭐ {product.rating} ({product.reviews} reviews)
                    </p>

                    <p className="text-4xl font-bold mt-4">₹{product.price}</p>

                    {/* Size */}
                    <div className="mt-6">
                        <h3>Select Size</h3>
                        <div className="flex gap-3 mt-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded ${selectedSize === size ? "bg-black text-white" : "bg-white text-black border-gray-400"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color */}
                    <div className="mt-6">
                        <h3>Select Color</h3>
                        <div className="flex gap-3 mt-2">
                            {product.colors.map((color) => (
                                <div
                                    key={color.id}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-10 h-10 rounded-full cursor-pointer border ${selectedColor.id === color.id
                                            ? "border-black"
                                            : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: color.hex }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Add to cart */}
                    <button
                        className="mt-8 w-full py-3 bg-black text-white rounded"
                        onClick={() => {
                            if (!selectedSize || !selectedColor) {
                                alert("Please select size & color");
                                return;
                            }

                            addToCart({
                                id: product.id,
                                name: product.name,
                                image: selectedImage,
                                price: product.price,
                                size: selectedSize,
                                color: selectedColor,
                                quantity: 1,
                            });

                            alert("Item added to cart!");
                        }}
                    >Add to Cart
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

            <div>
                <h2 className="text-3xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                    {product.name} Our signature minimal tee crafted from 100% organic cotton. Perfect for everyday wear with a relaxed fit and premium feel. Designed in Mumbai, made sustainably.
                </p>
            </div>

            <div className="mb-16">
                <h2 className="text-2xl lg:text-3xl mb-8">Customer Reviews</h2>
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">{review.name}</span>
                                    <span className="text-sm border bg-green-600 text-black px-2 py-1 rounded">
                                        Verified Purchase
                                    </span>
                                </div>
                                <span className="text-lg text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex mb-3">
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                            <p className="text-gray-600">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div>
                    <h2 className="text-3xl font-semibold mb-6">You May Also Like</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            )}

        </div>


        <Footer />
        </>
    );
};

export default ProductDetail;
