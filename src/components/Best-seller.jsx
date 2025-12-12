import React from 'react'

const bestSellers = [
    {
        id: "bs1",
        name: "Classic Minimal Tee",
        shortTitle: "Everyday Essential",
        image: "/images/cap-model.jpeg",
        priceInInr: 1299,
        rating: 4.8,
        reviewCount: 247,
    },
    {
        id: "bs2",
        name: "Retro Sunset Graphic Tee",
        shortTitle: "Retro Vibes",
        image: "/images/printed-image.jpeg",
        priceInInr: 999,
        rating: 4.6,
        reviewCount: 183,
    },
    {
        id: "bs3",
        name: "Street Art Series Tee",
        shortTitle: "Street Art Drop",
        image: "/carousel/image3.jpg",
        priceInInr: 1499,
        rating: 4.9,
        reviewCount: 312,
    },
]
function BestSeller() {
    return (
        <section className="w-full  flex flex-col items-center gap-2 py-16">

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Best Sellers
            </h2>
            <p className="text-gray-500 mb-10">
                Our most popular products
            </p>
            <div className="w-full flex justify-center ">
                <div className="grid grid-cols-1 sm:grid-cols-1 max-sm:w-xl max-sm:h-[2000px] md:grid-cols-2 md:ml-10 lg:ml-0 lg:grid-cols-3 gap-8 w-9xl ">
                    {bestSellers.map((product) => (
                        <div
                            key={product.id}
                            className="group border   rounded-xl w-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                        >

                            <div className="h-[600px] w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                            <div className="flex-1 w-full px-4 pt-4 text-xl">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-brand-terracotta">
                                    {product.shortTitle}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className='text-yellow-500 '>★</span> {product.rating} <span className='text-gray-400'>   ({product.reviewCount} reviews)</span>
                                </p>
                                <p className="mt-2  text-2xl mb-5 flex items-center justify-between font-semibold text-gray-900">
                                    ₹{product.priceInInr}
                                    <div className="flex gap-1">
                                        <span className="px-2 py-1 bg-gray-100 text-xs rounded">S</span>
                                        <span className="px-2 py-1 bg-gray-100 text-xs rounded">M</span>
                                        <span className="px-2 py-1 bg-gray-100 text-xs rounded">L</span>
                                        <span className="px-2 py-1 bg-gray-100 text-xs rounded">XL</span></div>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='w-full h-20 flex justify-center mb-10 '>
            <a
                href="/products"
                className="mt-8 inline-block px-6 py-3 border-2 border-gray-800 text-gray-900 font-semibold hover:bg-brand-black hover:text-white transition all duration-300 text-lg text-center"
            >
                Shop All Products
            </a>
            </div>

        </section >
    )
}

export default BestSeller