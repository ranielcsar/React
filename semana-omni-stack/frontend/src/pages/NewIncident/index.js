import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import useForm from '../../useForm';
import api from '../../services/api';

export default function NewIncident() {

   var ongId = localStorage.getItem('ongId');
   var history = useHistory();

   async function handleNewIncident() {

      let data = {...dados};

      try {
         await api.post('incidents', data, {
            headers: {
               Authorization: ongId
            }
         })

         history.push('/profile');
      } catch (err) {
         alert('Erro ao cadastrar caso, tente novamente.');
      }
   }

   var { dados, handleSubmit, handleChange } = useForm(handleNewIncident);

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>

               <h1>Cadastrar novo caso</h1>
               <p>
                  Descreva o caso detalhadamente para encontrar um héroi
                  para resolver isso.
               </p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar para página inicial
               </Link>
            </section>

            <form onSubmit={(evt) => handleSubmit(evt)}>
               <input 
                  placeholder="Título do caso"
                  value={dados.title}
                  name="title"
                  onChange={handleChange}
               />
               <textarea 
                  placeholder="Descrição"
                  value={dados.description}
                  name="description"
                  onChange={handleChange}
               />
               <input 
                  placeholder="Valor em reais"
                  value={dados.value}
                  name="value"
                  onChange={handleChange}
               />

               <button type="subtmit" className="botao">Cadastrar</button>
            </form>
         </div>
      </div>
   );
}