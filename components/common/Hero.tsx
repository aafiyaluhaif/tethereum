'use client';
import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className='container-2 text-center mt-14'>
        <h1 className='text-6xl  font-bold   px-20 leading-[80px]'>
          TETHEREUM TOKEN , SWAP AND EXCHANGE
        </h1>
      </div>
    </motion.div>
  );
};

export default Hero;
