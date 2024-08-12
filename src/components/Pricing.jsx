import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { smallSphere, stars } from '../assets';
import PricingList from './PricingList';
import { LeftLine, RightLine } from '../components/design/Pricing';

const Pricing = () => {
  return (
    <Section className='overflow-hidden' id='pricing'>
      <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
          <img
            className='relative z-1'
            src={smallSphere}
            width={255}
            height={255}
            alt='Small Sphere'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
          <img
            src={stars}
            className='w-full'
            width={950}
            height={400}
            alt='Stars Background'
          />
        </div>
      </div>
      <Heading
        tag='Get started with Brainwave'
        title='Pay once, use forever'
      />
      <div className='relative mx-16'>
        <PricingList />
        <LeftLine />
        <RightLine />
        <div>
          <a className='flex justify-center mt-10 underline uppercase' href='/#pricing'>
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
