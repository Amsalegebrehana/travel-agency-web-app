import Image from 'next/image';

export default function TopDestination() {
    const destinations = [
        {
            image: "/images/cover/rome.svg",
            city: "Rome, Italy",
            price: "$5,42k",
            duration: "10 Days Trip"
        },
        {
            image: "/images/cover/london.svg",
            city: "London, UK", 
            price: "$4.2k",
            duration: "12 Days Trip"
        },
        {
            image: "/images/cover/europe.svg",
            city: "Full Europe",
            price: "$15k",
            duration: "28 Days Trip"
        }
    ];

    return (
        <div className='flex flex-col gap-8 md:gap-14 my-8 md:my-16  mx-auto px-4'>
            <div className='flex flex-col justify-center items-center text-center'>
                <p className='text-lg text-[#5E6282] mb-2 md:mb-4'>Top Selling</p>
                <h1 className='text-3xl md:text-5xl font-bold font-volkhov text-[#14183E]'>Top Destinations</h1>
            </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
    {destinations.map((destination, index) => (
        <div 
            key={index} 
            className='rounded-3xl bg-white overflow-hidden shadow-lg max-w-sm' // added max-w-sm
        >
            <div className="relative w-full h-80"> {/* Added wrapper div */}
                <Image 
                    src={destination.image} 
                    alt={destination.city} 
                    fill 
                    className="object-cover"
                />
            </div>
                        <div className='p-5'>
                            <div className='flex justify-between items-center mb-4'>
                                <span className='text-[#5E6282]'>{destination.city}</span>
                                <span className='font-semibold'>{destination.price}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src="/images/icons/plane-icon.svg" alt="plane" width={20} height={20} />
                                <span className='text-[#5E6282]'>{destination.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}