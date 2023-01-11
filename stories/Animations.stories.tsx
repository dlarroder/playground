import { useState } from '@storybook/addons';
import React from 'react';
import { AnimatedBars } from '../src/AnimatedBars';
import { DrawingCanvas } from '../src/DrawingCanvas';
import { HoverableText } from '../src/HoverableText';
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
