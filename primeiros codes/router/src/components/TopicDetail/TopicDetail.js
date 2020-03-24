import React from 'react';
import { Link } from 'react-router-dom';

const TopicDetail = ({ routes, match }) => {
  console.log(routes());

   return (
      <div>
         <hr />
         <h3>{ match.params.topicID }</h3>

         <ul>
           <li>
             <Link to="/Topics">Voltar aos tópicos</Link>
           </li>
         </ul>
      </div>
   );
};

export default TopicDetail;