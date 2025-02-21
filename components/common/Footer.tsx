import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import { Facebook, Twitter, Send, Instagram, Youtube } from 'lucide-react';
import { Button } from '../ui/button';
const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 text-center'>
      <div>
        <h2 className='lg:text-lg text-base  font-light mb-4'>
          Community, Utility, Vision — Tethereum has it all.
        </h2>
        <Link href={'http://whitepaper.tethereum.net/TETHEREUM-WHITEPAPER.pdf'}>
          <Button className='bg-white shadow-md text-lg text-black rounded-xl lg:p-6 p-4 w-fit mt-4'>
            Whitepaper
          </Button>
        </Link>
      </div>

      <div className='flex flex-col md:flex-row justify-between  mt-10 px-10'>
        {/* Logo and Social Icons */}
        <div className='text-center'>
          <div className='flex flex-col  '>
            <Image
              src={'/logo1.png'}
              alt='logo'
              sizes='100vw'
              height={0}
              width={0}
              className='lg:h-10 h-full w-auto object-cover'
            />
            <div className='flex space-x-6 justify-center items-center lg:mt-2 mt-4'>
              <Link href='https://facebook.com' target='_blank'>
                <Facebook className='w-5 h-5 text-white hover:text-blue-500 transition' />
              </Link>
              <Link href='https://twitter.com' target='_blank'>
                <Twitter className='w-5 h-5 text-white hover:text-blue-400 transition' />
              </Link>
              <Link href='https://telegram.org' target='_blank'>
                <Send className='w-5 h-5 text-white hover:text-blue-300 transition' />
              </Link>
              <Link href='https://instagram.com' target='_blank'>
                <Instagram className='w-5 h-5 text-white hover:text-pink-500 transition' />
              </Link>
              <Link href='https://youtube.com' target='_blank'>
                <Youtube className='w-5 h-5 text-white hover:text-red-500 transition' />
              </Link>
            </div>
          </div>
          <div className='flex space-x-4 mt-3 justify-center md:justify-start'>
            <Link href='#'>
              <i className='fab fa-facebook text-white hover:text-gray-400'></i>
            </Link>
            <Link href='#'>
              <i className='fab fa-twitter text-white hover:text-gray-400'></i>
            </Link>
            <Link href='#'>
              <i className='fab fa-telegram text-white hover:text-gray-400'></i>
            </Link>
            <Link href='#'>
              <i className='fab fa-instagram text-white hover:text-gray-400'></i>
            </Link>
            <Link href='#'>
              <i className='fab fa-youtube text-white hover:text-gray-400'></i>
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div className='text-center md:text-left mt-6 md:mt-0'>
          <h3 className='text-lg font-semibold mb-2'>Important Links</h3>
          <ul className='space-y-1 text-gray-400'>
            <li>
              <Link
                href='https://linktr.ee/Tethereum'
                className='hover:text-white'
              >
                Linktree
              </Link>
            </li>
            <li>
              <Link href='#faq' className='hover:text-white'>
                Faq
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='text-center md:text-left mt-6 md:mt-0'>
          <h3 className='text-lg font-semibold mb-2'>Contact Us</h3>
          <p className='text-gray-400'>Tethereum © 2025</p>
          <p className='text-gray-400'>
            Email:{' '}
            <Link href='mailto:hey@tethereum.net' className='hover:text-white'>
              hey@tethereum.net
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
