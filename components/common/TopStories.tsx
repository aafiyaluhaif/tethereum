'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TopStories() {
  useEffect(() => {
    // Ensure TradingView script loads correctly
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: '100%',
      height: '500',
      colorTheme: 'dark',
      locale: 'en',
    });

    document.getElementById('tradingview-container')?.appendChild(script);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, scale: 0.8, rotateX: 45, opacity: 1 }}
      whileInView={{ y: 0, scale: 1, rotateX: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }} // Triggers animation when 20% of it is visible
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className='mt-20 border-4 border-[#26262680] w-full origin-top'
    >
      {/* TradingView Widget Container */}
      <div id='tradingview-container'></div>

      {/* TradingView Copyright */}
      <div className='tradingview-widget-copyright'>
        <a
          href='https://www.tradingview.com/'
          rel='noopener nofollow'
          target='_blank'
        >
          <span className='text-white'>Track all markets on TradingView</span>
        </a>
      </div>
    </motion.div>
  );
}
