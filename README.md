# playground 

[![NPM](https://img.shields.io/npm/v/@dlarroder/playground.svg)](https://www.npmjs.com/package/@dlarroder/playground)
[![Downloads](https://img.shields.io/npm/dt/@dlarroder/playground.svg)](https://www.npmjs.com/package/@dlarroder/playground)

**playground** is a React component component library, as the name suggest, this will serve as my playground where I can 
show off some of the cool component ideas I have and will be available for the public to use via npm.

## Installing playground

To use playground components, all you need to do is install the `@dlarroder/playground` package

```sh
$ yarn add @dlarroder/playground

# or

$ npm i @dlarroder/playground
```

## Usage

To start using the components, please follow these steps:

1. Import stylesheets manually

```jsx
import '@dlarroder/playground/dist/styles.css'
```

2. Now you can start using components like so

```jsx
import { useState } from 'react'
import { Switch } from '@dlarroder/playground'

function Example() {
  const [checked, setChecked] = useState(false)

  return <Switch checked={checked} onChange={setChecked} />
}
```

## Looking for the documentation?

You can visit the full list of components here -- https://playground.dalelarroder.com/
