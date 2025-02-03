import TopSection from '@/components/home/TopSection';
import BestServiceSection from '@/components/home/ServicesSection';
import TopDestination from '@/components/home/TopDestination';
import NextSteps from '@/components/home/NextSteps';
// import Testimonials from '@/components/home/Testimonials';
import Image from "next/image";

export default function Home() {
  return (
    
    <div className='mx-10 md:mx-32 mt-10 gap-7'>

      <TopSection />
      <BestServiceSection />
      <TopDestination />
      <NextSteps />
      {/* <Testimonials /> */}
      <div className='flex justify-between w-full my-10'>
          <Image src="/images/cover/axon-logo.svg" alt="background decoration" className='' width={120} height={70} />
          <Image src="/images/cover/jetstar-icon.svg" alt="background decoration" width={120} height={50} />
          <Image src="/images/cover/expedia-icon.svg" alt="background decoration" width={120} height={50} />
          <Image src="/images/cover/quantas-logo.svg" alt="background decoration" width={120} height={50} />
          <Image src="/images/cover/alitalia-icon.svg" alt="background decoration"  color='#374151' className='text-gray-700' width={120} height={50} />
      </div>
    </div>
  );
}
