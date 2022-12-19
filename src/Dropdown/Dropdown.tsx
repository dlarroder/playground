import { Listbox, Transition } from '@headlessui/react';
import React from 'react';
import tw, { styled } from 'twin.macro';
import { DropdownButton } from './DropdownButton';
import { DropdownOption } from './DropdownOption';
import { BaseDropdownOption } from './types';

interface Props<T> {
  options: T[];
  value: T;
  onClick: (v: T) => void;
  children?: React.ReactElement;
  overlayStyle?: React.CSSProperties;
}

const OptionsWrapper = styled.div(
  tw`bg-white py-1 rounded border border-gray-300 focus:outline-none`
);

export function Dropdown<T extends BaseDropdownOption>({
  options,
  value,
  onClick,
  overlayStyle = { width: 300 },
  children = <DropdownButton />,
}: Props<T>) {
  return (
    <Listbox value={value} onChange={onClick}>
      {({ open }) => (
        <>
          {React.cloneElement(children, { active: open, label: value.name })}
          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-0.5"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0.5"
            leaveTo="opacity-0 translate-y-0"
          >
            <Listbox.Options
              tw="focus:ring-0 active:ring-0"
              style={overlayStyle}
            >
              <OptionsWrapper style={overlayStyle}>
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    value={option}
                    disabled={option.disabled}
                  >
                    {({ active, selected }) => (
                      <DropdownOption
                        option={option}
                        active={active}
                        selected={selected}
                      />
                    )}
                  </Listbox.Option>
                ))}
              </OptionsWrapper>
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}
