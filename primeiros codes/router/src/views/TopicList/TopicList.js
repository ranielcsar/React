import React from 'react';
import { Link } from 'react-router-dom';
import { MakeRouteWithSubRoutes } from './../../make-route';

import './topic-list.css';

const topics = [
   { id: 0, nome: 'Tópico 1', topicosRelacionados: [1, 2, 3] },
   { id: 1, nome: 'Tópico 2', topicosRelacionados: [0, 3]    },
   { id: 2, nome: 'Tópico 3', topicosRelacionados: [0, 1, 3] },
   { id: 3, nome: 'Tópico 4', topicosRelacionados: [1, 2]    }
];

const buscar = (id) => topics.find( (item) => {
   return item.id === parseInt(id, 10);
});

const TopicList = ({ match, routes }) => {
   const topico = buscar(match.params.id);

   return (
      <div>
         
         <h3>{ topico.nome }</h3>
         <h4>INFO: Informações sobre o { topico.nome }</h4><br/>
         <h4>Tópicos relacionados:</h4>

         <ul>
         {
            topico.topicosRelacionados.map( (id) => (
               <li key={ id }>
                  <Link to={ `${ match.url }/${ id }` }>
                     { buscar(id).nome }
                  </Link>
               </li>
            ))
         }
         </ul>

         {
            routes.map( (route, index) => 
               <MakeRouteWithSubRoutes key={ index } { ...route } />
            )
         }

      </div>
   );
}

export default TopicList;