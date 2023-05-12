import { useState } from '@storybook/addons';
import React from 'react';
import { AnimatedBars } from '../src/AnimatedBars';
import { DrawingCanvas } from '../src/DrawingCanvas';
import { HoverableText } from '../src/HoverableText';
import { SmoothGallery } from '../src/SmoothGallery';
import { StrikeThrough } from '../src/StrikeThrough';

export default {
  title: 'Animations',
  component: null,
};

export function AnimatedBarsExample() {
  return <AnimatedBars />;
}

AnimatedBarsExample.storyName = 'Animated Bars';

export function HoverableTextExample() {
  return <HoverableText text="Absolutely" />;
}

HoverableTextExample.storyName = 'Hoverable Text';

export function StrikeThroughExample() {
  const [breakfast, setBreakfast] = useState(false);
  const [drinkWater, setDrinkWater] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <StrikeThrough done={breakfast} onClick={() => setBreakfast(!breakfast)}>
        Eat Breakfast
      </StrikeThrough>

      <StrikeThrough
        done={drinkWater}
        onClick={() => setDrinkWater(!drinkWater)}
        lineThickness={3}
        color="tomato"
        className="text-2xl font-semibold"
      >
        Drink Water
      </StrikeThrough>
    </div>
  );
}

StrikeThroughExample.storyName = 'Strike Through';

export function DrawingCanvasExample() {
  return <DrawingCanvas />;
}

DrawingCanvasExample.storyName = 'Drawing Canvas';

export function SmoothGalleryExample() {
  return (
    <div className="grid content-center h-[500px]">
      <SmoothGallery
        imageUrls={[
          'images/1.jpeg',
          'images/2.jpeg',
          'images/3.jpeg',
          'images/4.jpeg',
          'images/5.jpeg',
          'images/6.jpeg',
          'images/7.jpeg',
          'images/8.jpeg',
          'images/9.jpeg',
          'images/10.jpeg',
        ]}
      />
    </div>
  );
}

SmoothGalleryExample.storyName = 'Smooth Gallery';
