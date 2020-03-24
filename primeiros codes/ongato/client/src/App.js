import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import ListaGatos from './components/lista-gatos';

const App = () => (
   <BrowserRouter>
      <ListaGatos/>
   </BrowserRouter>  
)

export default App;
