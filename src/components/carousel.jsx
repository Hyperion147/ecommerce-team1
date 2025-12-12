import React, { useState } from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"

const slides = [
    {
        title: "Street Art Series",
        subtitle: "Bold graphic designs",
        cta: "Explore Collection",
        image: "../../public/carousel/image1.jpeg",
        href: "/products"
    },
    {
        title: "Minimal Classics",
        subtitle: "Everyday essential tees",
        cta: "Shop Classics",
        image: "../../public/carousel/image2.jpeg",
        href: "/products"

    },
]

export default function FeaturedCollectionsCarousel() {
    const autoplay = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
    )
    const [api, setApi] = React.useState(null)
    const [selected, setSelected] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) return

        setCount(api.slideNodes().length)
        setSelected(api.selectedScrollSnap())
        const onSelect = () => {
            setSelected(api.selectedScrollSnap())
        }
        api.on("select", onSelect)
        onSelect()
    }, [api])

    return (
        <section className="w-[90vw] md:mx-auto md:h-screen flex flex-col items-center gap-2 py-16 ">

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Featured Collections
            </h2>
            <p className="text-gray-500 mb-10">
                Discover our latest drops
            </p>

            <Carousel
                className=" max-w-9xl px-4 "
                opts={{ loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                setApi={setApi}
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <Card className="overflow-hidden rounded-2xl shadow-sm">
                                <CardContent className="relative p-0 ">

                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className=" w-full h-[360px] md:h-[420px] lg:h-[560px] object-cover -my-12.5"
                                    />


                                    <div className="absolute inset-0 bg-black/30 -my-12.5" />


                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                                            {slide.title}
                                        </h3>
                                        <p className="text-lg font-light md:text-xl mb-6">
                                            {slide.subtitle}
                                        </p>
                                        <a href={slide.href} className="px-7 py-4  bg-brand-terracotta text-white font-semibold hover:bg-[#c89b6f] transition">
                                            {slide.cta}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="  absolute -left-10  md:ml-16 md:-left-8 bg-white shadow-md hover:bg-white h-14 w-14 hover:scale-110" />
                <CarouselNext className=" hidden md:flex  absolute right-12 md:mr-16 md:-right-8 bg-white shadow-md hover:bg-white h-14 w-14 hover:scale-110" />
            </Carousel>
            
            
            <div className="mt-4 flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api && api.scrollTo(index)}
                        className="flex items-center"
                    >
                        {index === selected ? (
                            <span className="h-2 w-10 rounded-full bg-brand-terracotta transition-all duration-300 ease-in-out" />
                        ) : (
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}
 