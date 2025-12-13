import React from 'react'
import AboutHero from '../components/About/hero.jsx'
import StatsSection from '../components/About/SectionState.jsx'
import Team from '../components/About/team.jsx'
import Footer from '../components/footer.jsx'
import Stability from '../components/About/Stability.jsx'
function About() {
    return (
        <>
            <AboutHero />
            <StatsSection />
            <div className="pt-20 min-h-screen flex flex-col items-center justify-center  px-4">
                <h1 className="text-8xl  mb-6 text-center text-black">Our Mission</h1>
                <p className="max-w-3xl text-lg text-gray-600 leading-relaxed text-center">
                    At ThreadVerse, we believe that clothing is more than just fabric; it's a canvas for self-expression and storytelling. Our mission is to empower individuals to wear their stories proudly through unique, high-quality apparel that resonates with their personal journeys. Founded in 2023, ThreadVerse has quickly become a hub for creative minds seeking to make a statement with their wardrobe. We are committed to sustainability, ethical production, and fostering a community where everyone can find pieces that reflect their identity. Join us in celebrating individuality and creativity—wear your story with ThreadVerse.
                </p>
                <p className="max-w-3xl text-MD text-gray-600 leading-relaxed text-center">
                    We envision a world where fashion transcends trends and becomes a powerful medium for storytelling. By prioritizing eco-friendly materials and ethical manufacturing practices, we aim to set a new standard in the fashion industry—one that values both the planet and the people who inhabit it. At ThreadVerse, every garment is crafted with care, designed to inspire confidence and authenticity in those who wear them. Together, let's create a future where fashion is not just about looking good, but also about feeling good and making a positive impact.
                </p>
            </div>
            <Team />
            <Stability />
            <div>
                <section class="py-16 lg:py-24">
                    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 class="text-3xl lg:text-5xl mb-6">Join Our Story</h2>
                        <p class="text-xl text-gray-600 mb-8">Be part of the sustainable fashion movement. Shop ThreadVerse today.</p>
                        <a href="/products" class="inline-block px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#2C2C2C] transition-colors text-lg">Shop Now</a>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About