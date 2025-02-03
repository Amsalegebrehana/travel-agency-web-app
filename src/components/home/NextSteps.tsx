"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NextSteps() {
    return (
        
        <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }} className='flex flex-col w-full md:w-1/2 gap-10 mt-8'>
                <p className='text-lg font-bold text-secondary'>Easy and Fast</p>
                <h1 className='text-[#181E4B] text-xl md:text-3xl lg:text-5xl font-volkhov font-bold leading-tight w-4/5'>
                    Book your next trip 
                    in 3 easy steps
                </h1>
               
               <div>
                    <ul className='flex flex-col gap-8 w-3/4'>
                        <li>
                            <div className='flex gap-6'>
                                <Image src="/images/icons/des_icon.svg" alt="step-1" width={60} height={60} />
                                <div className='gap-2'>
                                    <p className='font-semibold text-lg text-secondary'>Choose Destination</p>
                                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex gap-6'>
                                <Image src="/images/icons/payment-icon.svg" alt="step-1" width={60} height={60} />
                                <div className='gap-2'>
                                    <p className='font-semibold text-lg text-secondary'>Make Payment</p>
                                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex gap-6'>
                                <Image src="/images/icons/aircraft-icon.svg" alt="step-1" width={60} height={60} />
                                <div className='gap-2'>
                                    <p className='font-semibold text-lg text-secondary'>Reach Airport on Selected Date</p>
                                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </li>
                    </ul>
               </div>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }} className='w-1/2'>

                <div className='relative' style={{
                    backgroundImage: 'url("/images/cover/bg_blue.svg")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                    
                    <div className='mt-20 rounded-xl p-7 shadow-lg w-2/3 bg-white' >
                        <Image src="/images/cover/steps_img.svg" alt="decoration" width={500} height={500} />
                        <div className='mt-6'>
                            <p className='text-xl font-medium'>Trip To Greece</p>

                            <div className='flex gap-2 mt-2 font-medium'>
                                <p className='text-[#84829A]'>14-29 June |</p> 
                                <p className='text-[#84829A]'>by Robbin joseph</p>
                            </div>

                            <div className='flex gap-2 mt-5'>
                                <div className='flex gap-2'>
                                    <Image src="/images/icons/leaf.svg" alt="plane" width={40} height={40} />
                                    <Image src="/images/icons/map-icon.svg" alt="plane" width={40} height={40} />
                                    <Image src="/images/icons/send.svg" alt="plane" width={40} height={40} />
                                </div>
                            </div>

                            <div className='flex justify-between gap-2 mt-5'>
                                <div className='flex gap-2'>
                                    <Image src="/images/icons/building_icon.svg" alt="plane" width={20} height={20} />
                                    <p className='text-secondary'>24 people going</p>
                                </div>
                                <Image src="/images/icons/heart-icon.svg" alt="heart" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    {/* Floating card */}
                    <div className='absolute bottom-12 -right-2 bg-white rounded-2xl p-6 shadow-lg w-[263px]'>
                        <div className='flex items-center gap-3'>
                            <Image 
                                src="/images/cover/building.svg" 
                                alt="Rome" 
                                width={50} 
                                height={50} 
                                className='rounded-full'
                            />
                            <div>
                                <p className='text-gray-500 text-sm'>Ongoing</p>
                                <p className='font-medium text-xl'>Trip to rome</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex gap-2 text-sm mb-2'>
                                <span className='text-[#8A79DF]'>40%</span>
                                <span>completed</span>
                            </div>
                            <div className='w-full bg-[#F5F5F5] rounded-full h-2'>
                                <div className='bg-[#8A79DF] w-[40%] h-full rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}
