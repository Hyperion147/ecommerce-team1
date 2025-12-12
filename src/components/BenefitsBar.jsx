import React from 'react'

function BenefitsBar() {
    return (
        <section className="bg-gray-100 py-8  lg:h-28 border-b border-gray-300 flex">
            <div className="w-full flex justify-around align-middle  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-24 text-center">
                    <div className="flex gap-4 items-center">
                        <div class="p-3 bg-brand-green/10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-6 h-6 text-brand-green" aria-hidden="true">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-brand-black text-left md:">100% Organic Cotton
                            <br />
                            <span className='text-gray-500 text-xs'>Sustainable & Eco-friendly</span>
                        </span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div class="p-3 bg-[#D4A574]/10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck w-6 h-6 text-[#D4A574]" aria-hidden="true">
                                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                <path d="M15 18H9"></path>
                                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                <circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-brand-black text-left">Free Shipping<br /><span className='text-gray-500 text-xs'>On orders above ₹999</span></span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div class="p-3 bg-[#D4A574]/10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw w-6 h-6 text-[#D4A574]" aria-hidden="true">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                <path d="M3 3v5h5"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-brand-black text-left">30-Day Returns
                            <br />
                            <span className='text-gray-500 text-xs'>Hassle-free returns</span>
                        </span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div class="p-3 bg-brand-green/10 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-6 h-6 text-brand-green" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-brand-black text-left">Secure Payment
                            <br />
                            <span className='text-gray-500 text-xs'>100% secure checkout</span>
                        </span>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default BenefitsBar