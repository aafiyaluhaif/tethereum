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

      {/* Navbar (Ensured to be Above Particles) */}
      <div className='relative z-10 container-box  w-full'>
        <Navbar />
        <Hero />
        <TopStories />
        <Binance />
        <Tailored />
        {/* <Help />
        <Logo /> */}
      </div>
      {/* <div className='relative z-10 w-full'>
        <FAQ />
      </div> */}
      <div className='relative z-10 w-full container-box'>
        <Footer />
      </div>
    </div>
  );
}
