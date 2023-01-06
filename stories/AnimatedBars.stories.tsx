import React from 'react';
import { AnimatedBars } from '../src/AnimatedBars';
import { HoverableText } from '../src/HoverableText';

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
