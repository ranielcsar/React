import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

const Carrinho = ({ cart }) => {

   let total = 0;

   cart.map( (item) => total += item.produto.price * item.quantidade);

   const carrinho = cart.length > 0 ? (
      <div>
         <div className="panel-body">
            {
               cart.map( (item) => (
                  <div key={ item.produto.id }>
                     <Item item={ item }/>
                     <hr/>
                  </div>
               ))
            }
         </div>

         <div className="panel-footer">
            <div className="row text-center">
               <div className="col-xs-11">
                  <h4 className="text-right">
                     Total <strong>R$ { total.toFixed(3) }</strong>
                  </h4>
               </div>
            </div>
         </div>
      </div>
   ) : (
      <div className="panel-body">
         <p>O carrinho está vazio.</p>
      </div>
   );

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-12 col-xs-12">
               <div className="panel panel-info">
                  <div className="panel-heading">
                     <div className="panel-title">
                        <div className="row">
                           <div className="col-xs-6">
                              <h5><span className="glyphicon glyphicon-shopping-cart"></span> Meu carrinho</h5>
                           </div>

                        </div>
                     </div>
                  </div>

                  { carrinho }

               </div>
            </div>
         </div>
     </div>
   );
}

const mapStateToProps = (state) => { 
  return {
      cart: state.cart.cart
  }
};

export default connect(mapStateToProps)(Carrinho);