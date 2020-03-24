import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './style.css';

import Modal from '../modal';

const Gato = ({ gato }) => {

   return (
      <li className="gato">
         <span><b>Raça:</b> <span className="prop">{ gato.raca }</span></span>
         <span><b>Sexo:</b> <span className="prop">{ gato.sexo }</span></span>
         <span><b>Idade:</b> <span className="prop">{ gato.idade }</span></span>
         <span><b>Adotado:</b> <span className="prop">{ gato.adotado }</span></span>
         <span><b>Castrado:</b> <span className="prop">{ gato.castrado }</span></span>
         <span><b>Vermifugado:</b> <span className="prop">{ gato.vermifugado }</span></span>
         <span><b>Personalidade:</b> <span className="prop">{ gato.personalidade }</span></span>            
      </li>
   )
}

const ListaGatos = () => {

   var [ gatos, setGatos ] = React.useState([]);

   var [ state, setState ] = React.useState(false);   

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

   const showModal = () => { setState(true)  }
   const hideModal = () => { setState(false) }

   return (
      <div>
         <ul className="lista-gatos">
            {
               gatos.map( (gato) => (
                  <div key={ gato.ID }>
                     <Link to={ `gatos/${ gato.ID }` } onClick={ showModal }>
                        <h3>GATO { gato.ID }</h3>
                     </Link>

                     <Switch>
                        <Modal show={ state } handleClose={ hideModal }>
                           <Route
                              path="/"
                              render={ () => <Gato gato={ gato }/> }
                           />
                        </Modal>
                     </Switch>
                  </div>
               ))               
            }
         </ul>         
      </div>
   );
}

export default ListaGatos;