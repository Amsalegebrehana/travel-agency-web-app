"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            id: 1,
            name: "Mike taylor",
            location: "Lahore, Pakistan",
            image: "/path-to-mike-image.jpg",
            text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
        },
        {
            id: 2,
            name: "Chris Thomas",
            location: "CEO of Red Button",
            image: "/path-to-chris-image.jpg",
            text: "Your testimonial text here"
        },
        // Add more testimonials as needed
    ];

    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="mb-12">
                <h4 className="text-lg text-gray-600 mb-4">TESTIMONIALS</h4>
                <h2 className="text-4xl font-bold text-navy-900">What People Say<br />About Us.</h2>
            </div>

            <div className="relative">
                <div className="flex items-center justify-between">
                    <div className="max-w-xl">
                        <p className="text-lg text-gray-600 mb-8">
                            {testimonials[currentSlide].text}
                        </p>
                        <div className="flex items-center gap-4">
                            <Image 
                                src={testimonials[currentSlide].image}
                                alt={testimonials[currentSlide].name}
                                width={56}
                                height={56}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">{testimonials[currentSlide].name}</h3>
                                <p className="text-gray-600">{testimonials[currentSlide].location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}