import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react'; import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import MyApp from './_app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </NextUIProvider>
);


