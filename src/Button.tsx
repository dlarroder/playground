/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

export const LinkButton = tw.a`cursor-pointer bg-gradient-to-r from-primary-500 
to-primary-500 bg-no-repeat [background-position:0_100%] [background-size:100%_0.2em]
hover:[background-size:100%_100%] no-underline hover:text-white
focus:[background-size:100%_100%] motion-safe:transition-all
motion-safe:duration-300 dark:from-primary-500 dark:to-primary-500`;
