import React from 'react';

import './style.css';

const ListaGatos = () => {

  var [ gatos, setGatos ] = React.useState([]);

  React.useEffect( () => {
    callAPI()
      .then( (res) => setGatos(res))
      .catch( (error) => console.log(error))
  }, []);

  var callAPI = async () => {
    const response = await fetch('/gatos');
    const body = await response.json(); 

    if (response.status !== 200) { throw Error(body.message); }

    return body;
  }

  return (
      <ul className="lista-gatos">
         {
            gatos.map( (gato) => (
               <li className="gato" key={ gato.ID }>
                  <span className="nome"><b>Nome:</b> { gato.nome }</span>
                  <span className="raca"><b>Raça:</b> { gato.raca }</span>
                  <span className="idade"><b>Idade:</b> { gato.idade }</span>
                  <span className="castrado"><b>Castrado:</b> { gato.castrado }</span>
                  <span className="vermi"><b>Vermifugado:</b> { gato.vermifugado }</span>
                  <span className="adotado"><b>Adotado:</b> { gato.adotado }</span>
                  <span className="person"><b>Personalidade:</b> { gato.personalidade }</span>
               </li>
            ))
         }
      </ul>
  );
}

export default ListaGatos;