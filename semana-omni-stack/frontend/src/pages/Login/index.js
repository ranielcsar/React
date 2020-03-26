import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {

   var [ id, setId ] = useState('');
   var history = useHistory();

   async function handleLogin(evt) {
      evt.preventDefault();

      try {
         const response = await api.post('sessions', { id });

         localStorage.setItem('ongId', id);
         localStorage.setItem('ongName', response.data.name);

         history.push('/profile');
      } catch (err) {
         alert('Falha no login, tente novamente.');
      }
   }

   return (
      <div className="login-container">
         <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

            <form onSubmit={handleLogin}>
               <h1>Faça seu login</h1>
               <input placeholder="Sua ID"
                  value={id}
                  onChange={(evt) => setId(evt.target.value)}
               />

               <button type="submit" className="botao">Entrar</button>

               <Link className="back-link" to="/register">
                  <FiLogIn size={16} color="#E02041"/>
                  Não tenho cadastro
               </Link>
            </form>
         </section>

         <img src={heroesImg} alt="Heroes"/>
      </div>
   );
}