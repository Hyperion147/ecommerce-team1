import React from 'react'

function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="../../public/images/hero-image.jpeg" alt="Model wearing Classic Minimal Tee" className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent">
            <div className="max-w-4xl text-white flex flex-col items-start justify-center h-full px-6 sm:px-12 lg:px-24 md:ml-34">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-4 lg:mb-6 ">Unleash Your Style</h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl mb-8 lg:mb-12 text-gray-200">Minimal. Bold. Earth-friendly Tees</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/products" data-discover="true">
                  <button className="inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-brand-black text-white hover:bg-[#2C2C2C] active:scale-95 px-8 py-4 text-lg w-full sm:w-auto">Shop Now</button>
                </a>
                <a href="/products" data-discover="true">
                  <button className="inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white text-white hover:bg-brand-black hovFer:text-white active:scale-95 px-8 py-4 text-lg w-full sm:w-auto">New Arrivals</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero