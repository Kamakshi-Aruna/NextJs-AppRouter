"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
    { id: 1, name: "Laptop", image: "/laptop.jpg", description: "High-performance laptop with latest specs." },
    { id: 2, name: "Phone", image: "/iphone.jpg", description: "Latest smartphone with AI camera." },
    { id: 3, name: "Headphones", image: "/headphones.jpg", description: "Noise-canceling over-ear headphones." }
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const router = useRouter();

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + products.length) % products.length);
    };

    // Navigate to product details page
    const goToProductPage = (id: number) => {
        router.push(`/product/${id}`);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex items-center justify-center mb-6">
                <ShoppingCart className="mr-2 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg mb-4">
                {/* Product image and info card */}
                <div
                    className="relative h-80 group cursor-pointer"
                    onClick={() => goToProductPage(products[current].id)}
                >
                    <Image
                        src={products[current].image}
                        alt={products[current].name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Product info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{products[current].name}</h3>
                        <p className="text-sm">{products[current].description}</p>
                    </div>
                </div>

                {/* Navigation buttons overlaid on image */}
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all duration-200"
                    aria-label="Previous product"
                >
                    <ChevronLeft size={24} className="text-white" />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm hover:bg-white/50 rounded-full p-2 transition-all duration-200"
                    aria-label="Next product"
                >
                    <ChevronRight size={24} className="text-white" />
                </button>
            </div>

            {/* View details button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => goToProductPage(products[current].id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
                >
                    View Details
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}