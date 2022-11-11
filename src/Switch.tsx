import { Switch as HSwitch } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

export interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
}

export const Switch = ({
  checked,
  onChange,
  size = 'default',
  disabled,
}: SwitchProps) => {
  function handleChange(v: boolean) {
    if (disabled) {
      return;
    }

    onChange(v);
  }

  return (
    <HSwitch
      checked={checked}
      onChange={handleChange}
      className={classNames(
        `group relative inline-flex border-2 border-transparent rounded-full 
       cursor-pointer transition-colors ease-in-out duration-400
       focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 
       focus:outline-none`,
        {
          'h-4 w-8': size === 'small',
          'h-5 w-10': size === 'default',
          'h-6 w-11': size === 'large',
          'bg-primary-400': checked,
          'bg-gray-300': !checked,
          'opacity-70 cursor-not-allowed': disabled,
        }
      )}
    >
      <span className="sr-only">Switch example</span>
      <span
        aria-hidden="true"
        className={classNames(
          `pointer-events-none inline-block rounded-full bg-white shadow-lg 
      transform ring-0 transition ease-in-out duration-400`,
          {
            'h-3 w-3 translate-x-4 group-active:w-4 group-active:translate-x-3':
              size === 'small' && checked,
            'h-3 w-3 translate-x-0 group-active:w-4':
              size === 'small' && !checked,
            'h-4 w-4 translate-x-5 group-active:w-5 group-active:translate-x-4':
              size === 'default' && checked,
            'h-4 w-4 translate-x-0 group-active:w-5':
              size === 'default' && !checked,
            'h-5 w-5 translate-x-5 group-active:w-6 group-active:translate-x-4':
              size === 'large' && checked,
            'h-5 w-5 translate-x-0 group-active:w-6':
              size === 'large' && !checked,
          }
        )}
      />
    </HSwitch>
  );
};
