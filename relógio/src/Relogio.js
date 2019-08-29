import React from 'react';

class Relogio extends React.Component {
   constructor(props) {
      super(props);

      this.state = this.getTime();
   }

   componentDidMount() {
      this.setTimer();
   }

   componentWillUnmount() {
      if (this.timeout)
      {
         clearTimeout(this.timeout);
      }
   }

   getTime() {
      const currentTime = new Date();

      return {
         horas: currentTime.getHours(),
         minutos: currentTime.getMinutes(),
         segundos: currentTime.getSeconds(),
         ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
      }
   }

   setTimer() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.atualizarRelogio.bind(this), 1000);
   }

   atualizarRelogio() {
      this.setState(this.getTime, this.setTimer);
   }

   render() {
      const { horas, minutos, segundos, ampm } = this.state;      

      return (

         <div className="relogio">
            {
               horas === 0 ? 12 :
                  (horas > 12) ?
                     horas - 12 : horas
            }:{
               minutos > 9 ? minutos : `0${minutos}`
            }:{
               segundos > 9 ? segundos : `0${segundos}`
            } { ampm }
         </div>

      );
   }
}

export default Relogio;