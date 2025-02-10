import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className=' backdrop-blur-md shadow-lg w-full bg-[#262626b3] border border-[#26262680] rounded-xl px-4 py-5 flex flex-row justify-between items-center'>
      <div>
        <Image
          src={'/logo.png'}
          alt='logo'
          width={0}
          height={0}
          className='h-10 w-auto'
          sizes='100vw'
        />
      </div>
      <div className='flex flex-row gap-4'>
        <Link href='/' className='text-[#a3a3a3]'>
          Home
        </Link>
        <Link href='#target-section' className='text-[#a3a3a3]'>
          About Us
        </Link>
        <Link
          href='https://www.tethereum.net/'
          target='_blank'
          className='text-[#a3a3a3]'
        >
          Launch Swap
        </Link>
        <Link href='https://www.tethereum.com/' className='text-[#a3a3a3]'>
          P2P Plus
        </Link>
        <Link
          href='http://docs.tethereum.net/docs/'
          target='_blank'
          className='text-[#a3a3a3]'
        >
          Documentation
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
