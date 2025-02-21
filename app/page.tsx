import Binance from '@/components/common/Binance';
import FAQ from '@/components/common/Faq';
import Footer from '@/components/common/Footer';
import Help from '@/components/common/Help';
import Hero from '@/components/common/Hero';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import ParticlesComponent from '@/components/common/Particles';
import ParticlesBackground from '@/components/common/Particles';
import Tailored from '@/components/common/Tailored';
import TopStories from '@/components/common/TopStories';

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
