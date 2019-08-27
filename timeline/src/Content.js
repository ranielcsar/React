import React from 'react';

import ActivityItem from './ActivityItem'

class Content extends React.Component {
   render() {
      const { atividades } = this.props;

      return (

         <div className="content">
            <div className="line"></div>
            { 
               atividades.map(atv => (
                  <ActivityItem atividade = { atv }/>
               )) 
            }
         </div>
      );
   }
}

export default Content;