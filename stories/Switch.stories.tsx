import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from '../src/Switch';

export default {
  title: 'Input/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export function Small() {
  const [active, setActive] = useState(false);

  return <Switch checked={active} onChange={setActive} size="small" />;
}

export function Default() {
  const [active, setActive] = useState(false);

  return <Switch checked={active} onChange={setActive} />;
}

export function Large() {
  const [active, setActive] = useState(false);

  return <Switch checked={active} onChange={setActive} size="large" />;
}

export function Disabled() {
  return (
    <div className="flex flex-col space-y-3">
      <Switch checked onChange={() => undefined} disabled />
      <Switch checked={false} onChange={() => undefined} disabled />
    </div>
  );
}
