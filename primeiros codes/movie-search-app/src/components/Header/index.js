import React from 'react';

const Header = (props) => {
   const { texto } = props;

   return (
      <header className="app-header">
         <h2>{ texto }</h2>
      </header>
   );
}

export default Header;