import React, { useState } from 'react'
import {Link } from 'react-router-dom'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className=" bg-white text-gray-800 flex items-center justify-between md:justify-around px-4 border-b border-gray-300 font-family-inter fixed w-full top-0 left-0 z-50">
                <div className='h-14 my-2'>
                    <Link to="/">
                    <h2 className='text-2xl hover:scale-105 transition-all 300 ease-in-out '>ThreadVerse </h2>
                    </Link>
                    <span className='text-brand-terracotta text-[14px] '>Wear Your Story</span>
                </div>
                <div className='my-auto hidden md:block'>
                    <ul className='flex list-none gap-8 text-md  '>
                        <li>
                            <Link to="/" className='px-4 hover:text-brand-terracotta'>Home</Link>
                        </li>
                        <li>
                            <Link to="/products" className='px-4 hover:text-brand-terracotta'>Products</Link>
                        </li>
                        <li>
                            <Link to="/about" className='px-4 hover:text-brand-terracotta'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className='px-4 hover:text-brand-terracotta'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                     <Link to="/cart">
                    <button className="p-3 bg-brand-terracotta/0 hover:scale-110 rounded-xl transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5 lg:w-6 lg:h-6 text-brand-black" aria-hidden="true"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                    </button>
                    
                    </Link>
                    <button className="md:hidden p-2  hover:scale-110 rounded-lg transition-all" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className={`md:hidden overflow-hidden  absolute top-18  text-center bg-white w-full left-0  transition-all duration-300 ease-in-out ${isOpen
                        ? 'max-h-96 opacity-100 pt-4 pb-2'
                        : 'max-h-0 opacity-0'
                    }`}>
                    <ul className="flex flex-col gap-3 text-lg px-2">
                        {['Home', 'Products', 'About', 'Contact'].map((item) => (
                            <li key={item} className="w-full">
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="block w-full font-medium px-6 py-3 rounded-xl hover:text-brand-terracotta hover:bg-brand-terracotta/10 
                                            transition-all duration-300 hover:font-semibold hover:translate-scale-105 hover:translate-x-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar