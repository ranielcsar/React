import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Main } />
      <Route path="/contato" exact component={ Contato } />
      <Route path="/sobre" exact component={ Sobre } />
    </Switch>
  );
}

export default Routes;