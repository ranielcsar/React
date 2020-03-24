import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const NavBar = () => (
   <nav className="navbar">
      <h3>NAVBAR</h3>

      <ul>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/about">Sobre</Link></li>
         <li><Link to="/topics">Tópicos</Link></li>
      </ul>

   </nav>
);

export default NavBar;