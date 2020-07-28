import { useState, useEffect } from 'react';

const useSearch = (array) => {
   const [ searchTerm, setSearchTerm ] = useState("");
   const [ result, setResult ] = useState([]);

   const handleChange = (event) => {
      setSearchTerm(event.target.value);
   }

   useEffect( () => {
      let results = array.filter((item) =>
         item.toLowerCase().includes(searchTerm)
      );

      setResult(results);
   }, [searchTerm] );

   return {
      searchTerm,
      result,
      handleChange
   }
}

export default useSearch;
