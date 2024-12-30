// import Image from "next/image";
import TopSection from '@/components/home/TopSection';
import BestServiceSection from '@/components/home/ServicesSection';

export default function Home() {
  return (
    
    <div className='mx-10 md:mx-32 mt-10 gap-7'>

      <TopSection />
      <BestServiceSection />
    </div>
  );
}
