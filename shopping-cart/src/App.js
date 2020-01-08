import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListaProdutos from './components/ProductList';
import Carrinho from './components/cart/Cart';
import Navbar from './components/Navbar';

const App = (props) => (
  <BrowserRouter>
      <div className="App">
         <Navbar/>

         <Switch>
            <Route exact path="/" component={ ListaProdutos }/>
            <Route path="/my-cart" component={ Carrinho }/>
         </Switch>
      </div>
   </BrowserRouter>
); 

export default App;
