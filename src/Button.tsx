import styled from '@emotion/styled';
import tw from 'twin.macro';

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

export interface ButtonProps {
  active?: boolean;
}

export const GhostButton = styled.button(({ active }: ButtonProps) => [
  tw`
  transition flex space-x-1 items-center px-1.5 py-0.5 rounded 
  focus:ring-primary-400 focus:outline-none active:ring-0`,
  active
    ? tw`bg-primary-400 text-white border border-transparent`
    : tw`bg-white text-primary-500 active:bg-primary-500 
         active:text-white border border-primary-500`,
]);
