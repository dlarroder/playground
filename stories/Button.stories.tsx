import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { ButtonSkeleton, GhostButton, LinkButton } from '../src/Button/Button';

export default {
  title: 'Input/Button',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

export function Link() {
  return <LinkButton>Hello!</LinkButton>;
}

export function Ghost() {
  return (
    <div className="flex flex-col space-y-3">
      <GhostButton size="sm">Button</GhostButton>
      <GhostButton size="md">Button</GhostButton>
      <GhostButton size="lg">Button</GhostButton>

      <GhostButton size="sm" icon={<BsArrowDownShort className="text-lg" />}>
        Upload
      </GhostButton>
      <GhostButton size="md" icon={<BsArrowDownShort className="text-lg" />}>
        Upload
      </GhostButton>
      <GhostButton size="lg" icon={<BsArrowDownShort className="text-lg" />}>
        Upload
      </GhostButton>
      <GhostButton
        size="sm"
        width="full"
        icon={<BsArrowDownShort className="text-lg" />}
        iconPosition="left"
      >
        Upload
      </GhostButton>
      <GhostButton
        size="sm"
        width="full"
        icon={<BsArrowDownShort className="text-lg" />}
        iconPosition="right"
      >
        Upload
      </GhostButton>
    </div>
  );
}

export function Skeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <ButtonSkeleton size="sm">Skeleton</ButtonSkeleton>
      <ButtonSkeleton size="md">Skeleton</ButtonSkeleton>
      <ButtonSkeleton size="lg">Skeleton</ButtonSkeleton>
    </div>
  );
}
