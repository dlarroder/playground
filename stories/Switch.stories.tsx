import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from '../src/Switch';

export default {
  title: 'Input/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export function Default() {
  const [active, setActive] = useState(false);

  return <Switch checked={active} onChange={setActive} />;
}
