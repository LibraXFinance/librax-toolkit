# 🌟 LibraX UIkit

[![Version](https://img.shields.io/npm/v/@librax/uikit)](https://www.npmjs.com/package/@librax/uikit) [![Size](https://img.shields.io/bundlephobia/min/@librax/uikit)](https://www.npmjs.com/package/@librax/uikit)

LibraX UIkit is a set of React components and hooks used to build pages on LibraX's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @librax/uikit`


## Setup

### Theme

Before using LibraX UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@librax/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@librax/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
