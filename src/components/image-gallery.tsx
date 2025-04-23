"use client"

import { useState } from "react"
import man from "../assets/man.png"
import boy from "../assets/boy.png"
import orange from "../assets/orangegirl.png"
import red from "../assets/redgirl.png"

interface GalleryImage {
    src: string
    alt: string
}

export default function ImageGallery() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const images: GalleryImage[] = [
        {
            src: man,
            alt: "Professional craftsman working with tools",
        },
        {
            src: boy,
            alt: "Young professional man smiling",
        },
        {
            src: orange,
            alt: "Professional woman in orange blazer",
        },
        {
            src: red,
            alt: "Professional woman in red blazer",
        },
    ]

    return (
        <section className="w-full px-4 py-8 md:py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative w-full md:w-1/4 aspect-[3/4] md:aspect-auto overflow-hidden transition-all duration-300 ease-in-out ${hoveredIndex !== null && hoveredIndex !== index ? "md:scale-[0.98] opacity-90" : ""
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? "scale-110" : "scale-100"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
