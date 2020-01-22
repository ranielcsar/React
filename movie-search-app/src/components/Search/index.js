import React, { useState } from 'react';

const Search = ({ search }) => {

   var [ searchValue, setSearchValue ] = useState('');

   const handleChange = (e) => {
      setSearchValue(e.target.value);
   }

   const resetInput = () => { setSearchValue(''); }

   const callSearch = (e) => {
      e.preventDefault();

      search(searchValue);
      resetInput();
   }

   return (
      <form className="search">
         <input
            value={ searchValue }
            onChange={ handleChange }
            type="text"
         />

         <input onClick={ callSearch } type="submit" value="PESQUISAR" />
      </form>
   );
}

export default Search;