'use client';

import { useEffect } from 'react';

const Binance = () => {
  useEffect(() => {
    // Check if the script is already added
    if (
      !document.querySelector(
        'script[src="https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.19.min.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src =
        'https://public.bnbstatic.com/unpkg/growth-widget/cryptoCurrencyWidget@0.0.19.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className=' border border-[#26262680] w-full'>
      {/* Binance Crypto Widget Container */}
      <div
        className='binance-widget-marquee'
        data-cmc-ids='1,1027,52,5426,74,1958,11419,24478,5690,13502,1839,10804'
        data-theme='dark'
        data-transparent='true'
        data-locale='en'
        data-fiat='USD'
        data-powered-by='Powered by'
        data-disclaimer='Disclaimer'
      ></div>
    </div>
  );
};

export default Binance;
