import { useState } from 'react';

const useForm = (callback) => {
   
   var [ dados, setDados ] = useState({});
   
   var handleSubmit = (e) => {
      if (e) { e.preventDefault(); }
      
      callback();
   }
   
   var handleChange = (e) => {
      e.persist();
      
      setDados(() => ({
            ...dados,
            [e.target.name]: e.target.value            
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