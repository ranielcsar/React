import React from 'react';

import Header from './Header';
import Content from './Content';

import './css/app.css';

const atividades = [
   {
      time: new Date().getTime(),
      text: 'Acabei de comer!',
      user: {
         id: 1, name: 'Ranoob',
         avatar: 'http://i.imgur.com/WuGSu1r.gif'
      },

      comments: [ {from: 'Jake', text: 'Eu também! :D'} ]
   },

   {
      time: new Date().getTime(),
      text: 'Peguei um passarinho :o',
      user: {
         id: 2, name: 'Jake',
         avatar: 'http://i.imgur.com/WuGSu1r.gif'
      },

      comments: [ {from: 'Black', text: 'Eu também consegui um!'} ]
   }  
];

class App extends React.Component {
   render() {
      return (

         <div className="notificationsFrame">
            <div className="panel">
               <Header titulo = "Linha do tempo"/>
               <Content atividades = { atividades }/>
            </div>
         </div>

      );
   }
}

export default App;