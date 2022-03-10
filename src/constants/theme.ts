import { createTheme } from '@nextui-org/react';

export const CUSTOM_THEME = createTheme({
  type: 'light',
  theme: {
    colors: {
      primaryLight: '$green200',
      link: '#5841d8',
      background: '#f8f7fb',
      primary: '#5841d8',
      primaryDark: '$green600',
      ghost: '#bbbbbb',
    },
    space: {},
    fonts: {},
  },
});
