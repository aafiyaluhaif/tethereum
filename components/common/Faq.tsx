'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <div
      className='bg-[#121111] shadow-md shadow-[#ffffff1f] p-6 rounded-lg mt-10 mb-10'
      id='faq'
    >
      <Accordion type='single' collapsible className='space-y-4'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='text-white text-lg'>
            What is Tethereum?
          </AccordionTrigger>
          <AccordionContent className='text-gray-400 text-base'>
            Tethereum is a cryptocurrency built on the Binance Smart Chain
            (BSC), designed with a focus on Community, Utility, and Vision. It
            provides a secure, scalable, and efficient blockchain ecosystem for
            decentralized finance (DeFi) and real-world applications.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2'>
          <AccordionTrigger className='text-white text-lg'>
            What makes Tethereum unique?
          </AccordionTrigger>
          <AccordionContent className='text-gray-400 text-base'>
            Tethereum stands out due to its commitment to security, scalability,
            and efficiency. Unlike many other projects, it emphasizes real-world
            utility, collaboration, and financial empowerment in the
            decentralized space.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger className='text-white text-lg'>
            Why does Tethereum use Binance Smart Chain (BSC)?
          </AccordionTrigger>
          <AccordionContent className='text-gray-400 text-base'>
            Tethereum is built on Binance Smart Chain (BSC) because of its low
            transaction fees, fast processing speed, and BEP20 compatibility,
            ensuring a smooth and efficient user experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-4'>
          <AccordionTrigger className='text-white text-lg'>
            How does Tethereum empower its users?
          </AccordionTrigger>
          <AccordionContent className='text-gray-400 text-base'>
            Tethereum fosters an inclusive and decentralized financial
            ecosystem, giving users greater control over their assets while
            promoting innovation, accessibility, and financial freedom.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-5'>
          <AccordionTrigger className='text-white text-lg'>
            Who can benefit from Tethereum?
          </AccordionTrigger>
          <AccordionContent className='text-gray-400 text-base'>
            Tethereum is designed for individuals, businesses, and developers
            who want to leverage secure and efficient blockchain technology for
            decentralized finance, payments, and other applications.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
