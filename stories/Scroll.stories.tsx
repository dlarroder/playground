import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { SkewScroll } from '../src/SkewScroll';

export default {
  title: 'Scroll',
  component: SkewScroll,
} as ComponentMeta<typeof SkewScroll>;

export function SkewSmoothScroll() {
  return (
    <SkewScroll sensitivity={12}>
      <div className="w-full h-screen bg-primary-200 text-4xl text-center">
        hi!
      </div>
      <div className="w-full h-screen bg-primary-400 text-4xl text-center">
        hello!
      </div>
      <div className="w-full h-screen bg-primary-600 text-4xl text-center">
        hola!
      </div>
      <div className="w-full h-screen bg-primary-800 text-4xl text-center">
        hey!
      </div>
    </SkewScroll>
  );
}
