import {
  ArrowRightLeft,
  CircleDollarSign,
  Github,
  Link,
  Workflow,
} from 'lucide-react';
import React from 'react';

const Tailored = () => {
  return (
    <div className='container-2  mt-28 '>
      <div className='px-40 flex flex-col items-center justify-center text-center'>
        <h2 className='text-3xl font-bold'>Tailored for BNBCHAIN</h2>
        <p className='text-[#a3a3a3] mt-1'>
          {' '}
          Seamless integration with world’s leading Blockchain
        </p>
      </div>
      <div className='grid grid-cols-12  gap-5 mt-10'>
        <div className=' col-span-7 '>
          <div className=' p-10 bg-black backdrop-blur-3xl rounded-2xl shadow-lg h-[300px] border border-white/20'>
            <div className='flex  flex-col gap-5'>
              {/* AI Icon (Replace with an actual icon if needed) */}
              <CircleDollarSign
                size={50}
                color='#a3a3a3'
                className='opacity-30 transition-all duration-300 hover:scale-75'
              />

              {/* Text Content */}
              <div>
                <h2 className='text-white text-xl font-semibold'>
                  BNB Chain & Tethereum: Powering the Future
                </h2>
                <p className='text-white/70 text-sm mt-2'>
                  BNB Chain leads blockchain innovation with high-speed
                  transactions, low fees, and strong security. Tethereum is
                  built on the Binance ecosystem, leveraging its efficiency and
                  scalability. This combination ensures seamless DeFi and Web3
                  integration. With cutting-edge technology, it empowers secure
                  and decentralized growth. Together, they drive the future of
                  blockchain innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-span-5 '>
          <div className=' p-10 bg-black backdrop-blur-3xl rounded-2xl shadow-lg h-[300px] border border-white/20'>
            <div className='flex  flex-col gap-5'>
              {/* AI Icon (Replace with an actual icon if needed) */}
              <Workflow
                size={50}
                color='#a3a3a3'
                className='opacity-30 hover:scale-75 transition-all duration-300'
              />

              {/* Text Content */}
              <div>
                <h2 className='text-white text-xl font-semibold'>
                  Seamless Execution
                </h2>
                <p className='text-white/70 text-sm mt-2'>
                  Experience ultra-efficient and frictionless transactions with
                  our deep BNB Chain integration. Enjoy lightning-fast
                  execution, ensuring smooth and uninterrupted performance—no
                  compromises, just pure efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' p-10 bg-black backdrop-blur-3xl rounded-2xl shadow-lg h-[300px] border border-white/20 mt-10'>
        <div className='flex  flex-col gap-5'>
          {/* AI Icon (Replace with an actual icon if needed) */}
          <Link
            size={50}
            color='#a3a3a3'
            className='opacity-30 hover:scale-75 transition-all duration-300'
          />

          {/* Text Content */}
          <div>
            <h2 className='text-white text-xl font-semibold'>
              Comprehensive Ecosystem Integration{' '}
            </h2>
            <p className='text-white/70 text-sm mt-2'>
              Effortlessly connect with the full spectrum of BNB Chain’s
              protocols and services. Our platform is built for seamless and
              secure collaboration, ensuring optimal synergy within the
              ecosystem for a smooth, efficient, and integrated experience.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12  gap-5 mt-10'>
        <div className=' col-span-5 '>
          <div className=' p-10 bg-black backdrop-blur-3xl rounded-2xl shadow-lg h-[300px] border border-white/20'>
            <div className='flex  flex-col gap-5'>
              <Github
                size={50}
                color='#a3a3a3'
                className='opacity-30 hover:scale-75 transition-all duration-300'
              />

              {/* Text Content */}
              <div>
                <h2 className='text-white text-xl font-semibold'>
                  Open Source & Community-Driven
                </h2>
                <p className='text-white/70 text-sm mt-2'>
                  Built with transparency and collaboration at its core,
                  Tethereum is a fully open-source, community-driven project. We
                  welcome developers worldwide to contribute and shape the
                  future of Tethereum on BNB Chain, fostering innovation and
                  decentralization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-span-7 '>
          <div className=' p-10 bg-black backdrop-blur-3xl rounded-2xl shadow-lg h-[300px] border border-white/20'>
            <div className='flex  flex-col gap-5'>
              <ArrowRightLeft
                size={50}
                color='#a3a3a3'
                className='opacity-30 hover:scale-75 transition-all duration-300'
              />

              {/* Text Content */}
              <div>
                <h2 className='text-white text-xl font-semibold'>
                  Open for Business: Cross-Border Transactions{' '}
                </h2>
                <p className='text-white/70 text-sm mt-2'>
                  Tethereum enables frictionless global transactions with no
                  third-party interference. Built on Binance Smart Chain (BNB
                  Chain), it ensures fast, secure, and fully decentralized
                  payments, revolutionizing cross-border finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailored;
