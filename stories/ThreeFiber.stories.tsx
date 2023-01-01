import { ComponentMeta } from '@storybook/react';
import React from 'react';
import SkylineLoader from '../src/SkylineLoader';

export default {
  title: 'Three.js',
  component: SkylineLoader,
} as ComponentMeta<typeof SkylineLoader>;

export function GithubSkyline() {
  return <SkylineLoader url="dlarroder-2021.stl" color="#FDD1D9" />;
}
