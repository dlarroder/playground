import styled from '@emotion/styled';
import { Listbox } from '@headlessui/react';
import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import tw from 'twin.macro';
import { ButtonProps } from '../src/Button';
import { Dropdown } from '../src/Dropdown/Dropdown';

export default {
  title: 'Input/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

type Fruit = {
  id: string;
  name: string;
};

const fruitOptions: Fruit[] = [
  {
    id: 'apple',
    name: 'Apple',
  },
  {
    id: 'banana',
    name: 'Banana',
  },
  {
    id: 'orange',
    name: 'Orange',
  },
];

export function Default() {
  const [selectedFruit, setSelectedFruit] = useState<Fruit>({
    id: 'banana',
    name: 'Banana',
  });

  return (
    <Dropdown<Fruit>
      options={fruitOptions}
      value={selectedFruit}
      onClick={setSelectedFruit}
    />
  );
}

export function CustomButton() {
  const [selectedFruit, setSelectedFruit] = useState<Fruit>({
    id: 'banana',
    name: 'Banana',
  });

  const CustomButton = styled.button(({ active }: ButtonProps) => [
    tw`transition flex space-x-1 items-center px-1.5 py-0.5 rounded 
    focus:ring-violet-400 focus:outline-none active:ring-0`,
    active
      ? tw`bg-violet-500 text-white`
      : tw`bg-violet-400 text-white active:bg-violet-600 active:text-white`,
  ]);

  function CustomButtonComponent({ active }: ButtonProps) {
    return (
      <Listbox.Button>
        <CustomButton active={active}>Custom Button</CustomButton>
      </Listbox.Button>
    );
  }

  return (
    <Dropdown
      options={fruitOptions}
      value={selectedFruit}
      onClick={setSelectedFruit}
    >
      <CustomButtonComponent />
    </Dropdown>
  );
}
