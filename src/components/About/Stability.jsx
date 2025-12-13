import React from 'react'

function Stability() {
    return (
        <section class="py-16 lg:py-24 bg-brand-black text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-3xl lg:text-5xl mb-8">Committed to Sustainability</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
                    <div>
                        <div class="text-4xl lg:text-5xl text-brand-green mb-3">100%</div>
                        <p class="text-lg">Organic Cotton</p>
                    </div>
                    <div>
                        <div class="text-4xl lg:text-5xl text-brand-green mb-3">0</div>
                        <p class="text-lg">Carbon Emissions</p>
                    </div>
                    <div>
                        <div class="text-4xl lg:text-5xl text-brand-green mb-3">500K+</div>
                        <p class="text-lg">Trees Planted</p>
                    </div>
                </div>
                <p class="text-xl text-gray-300 leading-relaxed">For every purchase, we plant a tree. We're carbon neutral, use eco-friendly packaging, and work only with ethical manufacturers. Together, we're making fashion sustainable.
                </p>
            </div>
        </section>
    )
}

export default Stability