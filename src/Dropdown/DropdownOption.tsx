import classNames from 'classnames';
import React from 'react';
import { BaseDropdownOption } from './types';

interface OptionProps<T> {
  option: T;
  active?: boolean;
  selected?: boolean;
}

export function DropdownOption<T extends BaseDropdownOption>({
  option,
  active = false,
  selected = false,
}: OptionProps<T>) {
  return (
    <li
      className={classNames('cursor-pointer px-1.5', {
        'bg-gray-100': active && !selected,
        'bg-gray-200': selected,
      })}
    >
      {option.name}
    </li>
  );
}
