import Binance from '@/components/common/Binance';
import FAQ from '@/components/common/Faq';
import Footer from '@/components/common/Footer';
import Hero from '@/components/common/Hero';
import Navbar from '@/components/common/Navbar';
import ParticlesComponent from '@/components/common/Particles';
import Tailored from '@/components/common/Tailored';
import TopStories from '@/components/common/TopStories';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tethereum',
  description:
    "Community, Utility, Vision — #Tethereum has it all. We're on a mission to become the world's most recognized and utilized #crypto.",
};

export default function Home() {
  return (
    <div className='relative h-screen  w-full'>
      {/* Background Particles */}
      <ParticlesComponent />

      <div className='relative z-10 lg:px-[200px] px-[30px] pt-5 '>
        <Navbar />
        <Hero />
        <TopStories />
        <Binance />
        <Tailored />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
