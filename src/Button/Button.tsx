import styled from '@emotion/styled';
import classNames from 'classnames';
import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import tw from 'twin.macro';
import { getIconSize } from './helpers';

export const LinkButton = styled.a(
  tw`
  no-underline
  cursor-pointer
  bg-no-repeat 
  bg-gradient-to-r 
  from-primary-500 
  to-primary-500 
  [background-position:0_100%] 
  [background-size:100%_0.2em]
  hover:[background-size:100%_100%] 
  hover:text-white
  focus:[background-size:100%_100%] 
  motion-safe:transition-all
  motion-safe:duration-300 
  dark:from-primary-500 
  dark:to-primary-500`
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  width?: 'fit' | 'full';
  active?: boolean;
  icon?: ReactElement;
  iconPosition?: 'left' | 'right';
}

export const ButtonSkeleton = styled.button(
  ({ size = 'md', width = 'fit' }: ButtonProps) => [
    width === 'fit' ? tw`w-fit` : tw`w-full`,
    size === 'sm' ? tw`bg-red-500 px-3 py-0.75 rounded text-sm` : null,
    size === 'md' ? tw`bg-red-500 px-3 py-1 rounded text-base` : null,
    size === 'lg' ? tw`bg-red-500 px-3 py-1 rounded text-lg` : null,
  ]
);

// const ButtonIconWrapper = styled.div(({ iconPosition, width }: ButtonProps) => [
//   tw`flex`,
// ]);

export const GhostButtonWrapper = styled(ButtonSkeleton)`
  ${({ active }: ButtonProps) => [
    tw`transition focus:ring-primary-300 focus:outline-none active:ring-0`,
    active
      ? tw`bg-primary-300 text-white border border-transparent`
      : tw`bg-white text-primary-500 active:bg-primary-500 hover:bg-primary-400 hover:text-white 
       active:text-white border border-primary-500`,
  ]}
`;

export const GhostButton = ({
  size,
  width,
  active,
  children,
  icon,
  iconPosition = 'left',
  ...rest
}: ButtonProps) => {
  if (icon) {
    const iconSize = getIconSize({ size });

    return (
      <GhostButtonWrapper size={size} width={width} active={active}>
        <div
          className={classNames('flex space-x-1 items-center justify-center', {
            '': iconPosition === 'left',
          })}
        >
          {iconPosition === 'left' &&
            React.cloneElement(icon, { size: iconSize })}
          <div>{children}</div>
          {iconPosition === 'right' &&
            React.cloneElement(icon, { size: iconSize })}
        </div>
      </GhostButtonWrapper>
    );
  }

  return (
    <GhostButtonWrapper size={size} width={width} active={active} {...rest}>
      {children}
    </GhostButtonWrapper>
  );
};
