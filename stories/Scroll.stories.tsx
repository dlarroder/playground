import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { HoverableText } from '../src/HoverableText';
import { SkewScroll } from '../src/SkewScroll';

export default {
  title: 'Scroll',
  component: SkewScroll,
} as ComponentMeta<typeof SkewScroll>;

export function SkewSmoothScroll() {
  return (
    <SkewScroll sensitivity={15}>
      <div className="w-full h-screen bg-primary-200 flex justify-center items-center">
        <HoverableText text="Skew" />
      </div>
      <div className="w-full h-screen bg-primary-400 flex justify-center items-center">
        <HoverableText text="Scroll" />
      </div>
      <div className="w-full h-screen bg-primary-600 flex justify-center items-center">
        <HoverableText text="Skew" />
      </div>
      <div className="w-full h-screen bg-primary-800 flex justify-center items-center">
        <HoverableText text="Scroll" />
      </div>
    </SkewScroll>
  );
}
