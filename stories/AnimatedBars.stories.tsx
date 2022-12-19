import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { AnimatedBars } from '../src/AnimatedBars';
import { HoverableText } from '../src/HoverableText';

export default {
  title: 'Animations',
  component: AnimatedBars,
} as ComponentMeta<typeof AnimatedBars>;

export function NowPlaying() {
  return <AnimatedBars />;
}

export function FancyText() {
  return <HoverableText text="Absolutely" />;
}
