import { Listbox } from '@headlessui/react';
import React from 'react';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { GhostButtonWrapper } from '../Button/Button';

interface DropdownButtonProps {
  active?: boolean;
  label?: string;
}

export function DropdownButton({ active = false, label }: DropdownButtonProps) {
  return (
    <Listbox.Button>
      <GhostButtonWrapper active={active}>
        <div className="flex space-x-0.5 items-center">
          <span>{label}</span>
          {active ? <RxCaretUp size={20} /> : <RxCaretDown size={20} />}
        </div>
      </GhostButtonWrapper>
    </Listbox.Button>
  );
}
