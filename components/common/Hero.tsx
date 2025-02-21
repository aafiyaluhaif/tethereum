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
      <div className='container-2 text-center mt-14 lg:px-40 px-0 flex flex-col items-center justify-center'>
        <h1 className='lg:text-6xl text-3xl  font-bold lg:leading-[80px] leading-[30px]'>
          The Smart Navigator for BNB Chain
        </h1>
        <Link href={'http://whitepaper.tethereum.net/TETHEREUM-WHITEPAPER.pdf'}>
          <Button className='bg-white shadow-md text-lg text-black rounded-xl lg:p-6 p-4 w-fit mt-4'>
            Whitepaper
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
