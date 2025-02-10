import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import { Facebook, Twitter, Send, Instagram, Youtube } from 'lucide-react';
const Footer = () => {
  return (
    <footer className='bg-black text-white py-10 text-center'>
      <h2 className='text-lg md:text-2xl font-light mb-4'>
        We’re just making sure it’s nice and clean!
      </h2>

      <button className='bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition'>
        WHITEPAPER
      </button>

      <div className='flex flex-col md:flex-row justify-between  mt-10 px-10'>
        {/* Logo and Social Icons */}
        <div className='text-center md:text-left'>
          <div className='flex flex-col  space-x-3'>
            <Image
              src={'/logo.png'}
              alt='logo'
              sizes='100vw'
              height={0}
              width={0}
              className='h-10 w-auto'
            />
            <div className='flex space-x-6 justify-center items-center mt-2'>
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
              <Link href='/' className='hover:text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='hover:text-white'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/swap' className='hover:text-white'>
                Launch Swap
              </Link>
            </li>
            <li>
              <Link href='/p2p' className='hover:text-white'>
                P2P Plus
              </Link>
            </li>
            <li>
              <Link href='/docs' className='hover:text-white'>
                Documentation
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
