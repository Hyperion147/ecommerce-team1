import React, { useState } from "react"

function SocialImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <a
      href="https://github.com/t4runjangra"
      target="_blank"
      rel="noopener noreferrer"
      className="aspect-square overflow-hidden rounded-lg group relative"
    >
      {/* skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  )
}

function Social() {
  return (
    <section className="w-screen h-[90vh] flex justify-center pt-44 gap-4 text-lg max-sm:h-[500px]">
      <div className="max-w-8xl w-full flex flex-col items-center text-black max-sm:-mt-48">
        <p className="text-4xl md:text-6xl lg:text-7xl">Follow Us</p>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          @ThreadVerse on Instagram
        </p>

        <div className="mt-10 grid max-w-[1500px] grid-cols-2 gap-4 px-4 lg:grid-cols-4">
          <SocialImage src="/images/image3.jpg" alt="Instagram post 1" />
          <SocialImage src="/images/image5.jpg" alt="Instagram post 2" />
          <SocialImage src="/images/girl.jpeg" alt="Instagram post 3" />
          <SocialImage src="/images/hero-image.jpeg" alt="Instagram post 4" />
        </div>
      </div>
    </section>
  )
}

export default Social
