'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
const Hero = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className='container-2 text-center mt-14 px-40 flex flex-col items-center justify-center'>
        <h1 className='text-6xl  font-bold leading-[80px]'>
          The Smart Navigator for BNB Chain
        </h1>
        <Link href={'http://whitepaper.tethereum.net/TETHEREUM-WHITEPAPER.pdf'}>
          <Button className='bg-white shadow-md text-lg text-black rounded-xl p-6 w-fit mt-4'>
            Whitepaper
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
