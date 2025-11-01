import React from 'react';
import './App.css';
import {  RouterProvider } from 'react-router';
import router from './components/router';
import MainLayout from './components/layouts/main-layout';
import { Theme } from '@radix-ui/themes';
import { useAppSelector } from './core/store/hooks';

function App() {
  const theme = useAppSelector(state => state.theme)
  return (
    <Theme appearance={theme.theme}> 
    <MainLayout> 
    <RouterProvider router={router}  />
    </MainLayout>
    </Theme>
  );
}

export default App;
