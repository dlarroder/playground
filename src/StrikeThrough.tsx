import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface StrikeThroughProps extends HTMLAttributes<HTMLSpanElement> {
  done?: boolean;
  color?: string;
  lineThickness?: number;
}

export const StrikeThrough = styled.span(
  ({ done, color = 'black', lineThickness = 2 }: StrikeThroughProps) => [
    `
  color: ${color};
  cursor: pointer;
  width: fit-content;
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent), linear-gradient(${color}, ${color});
  background-size: 0 ${lineThickness}px;
  background-position: 0 50%;
  background-repeat: no-repeat;
  transition: background-size 0.5s ease-in-out;`,
    done
      ? `
    background-size: 100% ${lineThickness}px;
    background-position: 0 50%;
  `
      : null,
  ]
);
