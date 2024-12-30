"use client";

import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';


export default function BestServiceSection() {
    const services = [
        {
            icon: "/images/icons/weather-icon.svg",
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it."
        },
        {
            icon: "/images/icons/plane-icon.svg",
            title: "Best Flights",
            description: "Engrossed listening. Park gate sell they west hard for the."
        },
        {
            icon: "/images/icons/events-icon.svg",
            title: "Local Events",
            description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
        },
        {
            icon: "/images/icons/customization-icon.svg",
            title: "Customization",
            description: "We deliver outsourced aviation services for military customers"
        }
    ];

    return (
        <div className='flex flex-col gap-14 my-16 container mx-auto'>
            <div className='flex flex-col justify-center items-center text-center'>
                <p className='text-lg text-[#5E6282] uppercase mb-4'>CATEGORY</p>
                <h1 className='text-5xl font-bold font-volkhov text-[#14183E]'>We Offer Best Services</h1>
            </div>
            <div className='grid grid-cols-4 gap-8 '>
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col justify-center items-center text-center p-8 rounded-3xl
                        hover:shadow-[0_100px_80px_rgba(0,0,0,0.02),0_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0_20px_13px_rgba(0,0,0,0.01),0_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] 
                        transition-shadow duration-300 cursor-pointer'
                    >
                        <div className='mb-6'>
                            <Image src={service.icon} alt={service.title} width={92} height={78} />
                        </div>
                        <h3 className='text-xl font-bold text-[#1E1D4C] mb-3'>{service.title}</h3>
                        <p className='text-[#5E6282] text-base leading-relaxed'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}