"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TopSection() {
    return (
        
        <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
            <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }} className='flex flex-col w-full md:w-1/2 gap-10 mt-8'>
                <p className='text-xl font-bold text-orange'>BEST DESTINATIONS AROUND THE WORLD</p>
                <h1 className='text-[#181E4B] text-3xl md:text-6xl lg:text-7xl font-volkhov font-bold leading-tight'>
                    Travel,{' '}
                    <span className="relative">
                        enjoy
                        <Image
                            src="/images/cover/Vector.svg"
                            alt="Decorative underline"
                            width={476}
                            height={44}
                            className="absolute -bottom-2 left-0 w-full"
                        />
                    </span>
                    <br />
                    and live a new<br />
                    and full life
                </h1>
                <p className='text-[#5E6282] text-lg max-w-[477px] mt-4'>
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </p>

                <div className='flex items-center gap-8 mt-4'>
                    <button className='bg-[#F1A501] text-white px-6 py-4 rounded-lg'>
                        Find out more
                    </button>

                </div>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }} className='w-1/2'>
                <Image src="/images/cover/person-img.svg" alt="hero-image" width={780} priority height={760} quality={100} />
            </motion.div>
        </div>
    )
}
