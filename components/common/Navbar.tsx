'use client';
import { BookOpen, GithubIcon, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='backdrop-blur-md shadow-lg w-full bg-[#262626b3] border border-[#26262680] rounded-xl px-4 py-5 flex flex-row justify-between items-center'>
      {/* Logo */}
      <div>
        <Image
          src={'/logo1.png'}
          alt='logo'
          width={0}
          height={0}
          className='h-10 w-auto object-cover'
          sizes='100vw'
        />
      </div>

      {/* Menu Button (Mobile Only) */}
      <button
        className='md:hidden text-white'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu className='w-6 h-6' />
      </button>

      {/* Desktop Menu */}
      <div className='hidden md:flex flex-row gap-8 items-center'>
        <Link
          href='https://github.com/tethereumtoken/'
          target='_blank'
          className='text-[#a3a3a3]'
        >
          <div className='flex flex-row gap-1 items-center'>
            <GithubIcon className='w-4 h-4' />
            <span className='text-sm'>Github</span>
          </div>
        </Link>
        <Link
          href='https://docs.tethereum.net/docs/'
          target='_blank'
          className='text-[#a3a3a3]'
        >
          <div className='flex flex-row gap-1 items-center'>
            <BookOpen className='w-4 h-4' />
            <span className='text-sm'>Docs</span>
          </div>
        </Link>
        <Link
          href='https://tethereum.com/'
          target='_blank'
          className='text-white bg-black px-4 py-1 rounded-[5px] inline-block'
        >
          <span className='text-sm'>Login</span>
        </Link>
      </div>

      {/* Mobile Menu (Shown When Menu Button Clicked) */}
      {menuOpen && (
        <div className='absolute top-16 right-4 bg-[#262626b3] border border-[#26262680] rounded-xl p-4 flex flex-col gap-4 md:hidden'>
          <Link
            href='https://github.com/tethereumtoken/'
            target='_blank'
            className='text-[#a3a3a3]'
          >
            <div className='flex flex-row gap-1 items-center'>
              <GithubIcon className='w-4 h-4' />
              <span className='text-sm'>Github</span>
            </div>
          </Link>
          <Link
            href='https://docs.tethereum.net/docs/'
            target='_blank'
            className='text-[#a3a3a3]'
          >
            <div className='flex flex-row gap-1 items-center'>
              <BookOpen className='w-4 h-4' />
              <span className='text-sm'>Docs</span>
            </div>
          </Link>
          <Link
            href='https://tethereum.com/'
            target='_blank'
            className='text-white bg-black px-4 py-1 rounded-[5px] inline-block text-center'
          >
            <span className='text-sm'>Login</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
