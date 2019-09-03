import React from 'react';

import { Container, Link } from './styles';

const Navbar = () => (  
   <Container>
      <Link exact to="/">Início</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/sobre">Sobre</Link>
   </Container>
);


export default Navbar;