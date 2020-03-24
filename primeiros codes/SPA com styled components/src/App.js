import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => (
   <BrowserRouter>
      <GlobalStyle />
      <Navbar      />
      <Sidebar     />
      <Routes      />
      <Footer      />      
   </BrowserRouter>
);


export default App;