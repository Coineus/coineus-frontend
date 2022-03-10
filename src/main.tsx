import './index.css';

import { NextUIProvider } from '@nextui-org/react';
import { CUSTOM_THEME } from 'constants/theme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider theme={CUSTOM_THEME}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
