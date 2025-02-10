import React from 'react';

const Help = () => {
  return (
    <div className='mt-20 mb-20 flex flex-col gap-8'>
      <div className='text-[#f2c226]'>
        <h2 className='text-5xl font-bold text-center'>
          Help build the network and community!
        </h2>
      </div>

      <div className='text-center text-sm text-[#f2c226]'>
        Tethereum has a governing token to bring changes, updates and
        modifications in the Open-Source system.
      </div>

      <div className='flex items-center justify-center mt-8  p-4 rounded-2xl'>
        <div className='flex items-center space-x-6 px-6 py-2 bg-black shadow-md shadow-[#262626b3] rounded-xl'>
          {/* Community Tab */}
          <div className='text-yellow-400 font-bold italic text-4xl px-6'>
            Community
          </div>
          <div className='w-[2px] h-32 bg-red-400'></div>

          {/* Utility Tab */}
          <div className='text-white  font-bold italic text-4xl px-6'>
            Utility
          </div>
          <div className='w-[2px] h-32 bg-green-400'></div>

          {/* Vision Tab */}
          <div className='text-yellow-400 font-bold italic text-4xl px-6'>
            Vision
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
