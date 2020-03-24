import React from 'react';

import './style.css';

const useForm = () => {
   
   var [ dados, setDados ] = React.useState({});
   
   var handleSubmit = (e) => {
      if (e) { e.preventDefault(); }

      var data = {
         raca          : dados.raca,
         sexo          : dados.sexo,
         idade         : dados.idade,
         adotado       : dados.adotado,
         castrado      : dados.castrado,
         vermifugado   : dados.vermifugado,
         personalidade : dados.personalidade
      }
      
      fetch('/gatos/novo', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
      }).then( (res) => {
         if (res.stauts >= 400) {
            throw Error('Bad response from server');
         }
         return res.json();
      }).then( (data) => {
         console.log(data);
      }).catch(error => console.log(error));
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

const Cadastro = () => {
   const { dados, handleSubmit, handleChange } = useForm();

   dados.adotado = 'não';

   return (
      <form onSubmit={ e => handleSubmit(e) } className="formCadastro">
         <div>
           <label>Raça</label>
           <input type="text" name="raca" 
               onChange={ handleChange } value={ dados.raca } required />           
           
           <label>Sexo</label>
           <input type="text" name="sexo"
               onChange={ handleChange } value={ dados.sexo } required />
         </div>
         
         <div>
            <label>Idade</label>
            <input type="text" name="idade"
               onChange={ handleChange } value={ dados.idade } required />
         </div>

         <div>
            <label>Castrado?</label>
            <input type="text" name="castrado"
               onChange={ handleChange } value={ dados.castrado } required />
         </div>

         <div>
            <label>Vermifugado?</label>
            <input type="text" name="vermifugado"
               onChange={ handleChange } value={ dados.vermifugado } required />
         </div>

         <div>
            <label>Personalidade</label>
            <input type="text" name="personalidade"
               onChange={ handleChange } value={ dados.personalidade } required />
         </div>
         
         <button type="submit">Concluir cadastro</button>
      </form>
   );
}

export default Cadastro;