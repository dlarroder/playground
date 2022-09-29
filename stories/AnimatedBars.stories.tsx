import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { AnimatedBars } from '../src/AnimatedBars';

export default {
  title: 'Animations',
  component: AnimatedBars,
} as ComponentMeta<typeof AnimatedBars>;

export function NowPlaying() {
  return <AnimatedBars />;
}
