import { ButtonProps } from './Button';

export function getIconSize({ size }: Pick<ButtonProps, 'size'>) {
  // default to size = md
  let iconSize = 20;

  if (size === 'sm') {
    iconSize = 16;
  }
  if (size === 'lg') {
    iconSize = 24;
  }

  return iconSize;
}
