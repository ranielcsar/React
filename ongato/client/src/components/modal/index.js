import React from 'react';

import './style.css';

const Modal = ({ handleClose, show, children }) => {
   var mostrar = show ? "modal display-block" : "modal display-none";
   
   return (
      <div className={ mostrar }>
         <section className="modal-main">
            { children }
            <button onClick={ handleClose }>Fechar</button>
         </section>
      </div>
   );
}

export default Modal;