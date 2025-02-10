'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
const Logo = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className='flex items-center justify-center'>
          <Image
            src={'/tetherium_image.png'}
            alt='tethereum'
            sizes='100vw'
            width={0}
            height={0}
            className='h-[500px] w-auto'
          />
        </div>
      </motion.div>
    </>
  );
};

export default Logo;
