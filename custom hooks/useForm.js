import { useState } from 'react';

const useForm = (callback) => {
   
   const [ dados, setDados ] = useState({});

   const handleSubmit = (evt) => {
      if (evt) { evt.preventDefault(); }

      callback();
   }

   const handleChange = (evt) => {
      evt.persist();

      setDados(() =>
         ({
            ...dados,
            [evt.target.name]: evt.target.value            
         })
      )     
   }

   return {
      handleSubmit,
      handleChange,
      dados
   }
   
};

export default useForm;