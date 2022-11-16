import '../tailwind.css';

import React from 'react';
import { GlobalStyles, theme } from 'twin.macro';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ prepend: true, key: 'twin' });

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
];
