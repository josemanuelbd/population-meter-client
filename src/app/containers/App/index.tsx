import React from 'react';

import { Routes } from '../../routes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Global, AppWrapper } from './styles';

const App: React.FC = () => (
  <>
    <Global />
    <Header />
    <AppWrapper>
      <Sidebar />
      <Routes />
    </AppWrapper>
  </>
);

export default App;
