import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import useForm from '../../useForm';

export default function Register() {

   var history = useHistory();

   async function handleRegister() {
      let data = {...dados};

      try {
         const response = await api.post('ongs', data);

         alert(`Seu ID de acesso: ${response.data.id}`);

         history.push('/');
      } catch (err) {
         alert('Erro no cadastro, tente novamente.');
      }
   }

   var { dados, handleSubmit, handleChange } = useForm(handleRegister);

   return (
      <div className="register-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>

               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e ajuda pessoas
                  a encontrarem os casos da sua ONG.
               </p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar para página inicial
               </Link>
            </section>

            <form onSubmit={(evt) => handleSubmit(evt)}>
               <input name="name" placeholder="Nome da ONG"
                  onChange={handleChange} value={dados.name} required/>

               <input type="email" name="email" placeholder="E-mail"
                  onChange={handleChange} value={dados.email} required/>

               <input placeholder="WhatsApp" name="whatsapp"
                  onChange={handleChange} value={dados.whatsapp} required/>
               
               <div className="input-group">
                  <input placeholder="Cidade" name="city"
                     onChange={handleChange} value={dados.city} required/>

                  <input placeholder="UF" style={{ width: 80 }}
                     name="uf" onChange={handleChange} value={dados.uf} required/>
               </div>

               <button type="subtmit" className="botao">Cadastrar</button>
            </form>
         </div>
      </div>
   );
}