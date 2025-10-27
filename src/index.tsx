import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './components/router';
import { Provider } from 'react-redux';
import { store } from './core/store';
import "@radix-ui/themes/styles.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}> 
   <RouterProvider router={router} />
   </Provider>
);

