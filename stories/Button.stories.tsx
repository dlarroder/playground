import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { GhostButton, LinkButton } from '../src/Button';

export default {
  title: 'Input/Button',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

export function Link() {
  return <LinkButton>Hello!</LinkButton>;
}

export function Ghost() {
  return <GhostButton>Ghost Button</GhostButton>;
}
