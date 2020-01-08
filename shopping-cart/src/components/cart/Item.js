import React from 'react';

import { connect } from 'react-redux';
import { updateCartQuant, removeFromCart } from '../../store/actions/cartActions';

const Item = ({ item, update, remove }) => {

   var state = {
      quantidade: item.quantidade,
      btnVisivel: false
   }

   var handleChange = (e) => {
      if (e.target.value <= 0) {
         alert('Quantidade tem que ser maior que 1');

         return;
      }

      if (e.target.value > item.produto.amount) {
         alert('Você excedeu o limite disponível deste produto!');

         return;
      }

      if (state.quantidade !== e.target.value) {
         state = {
            quantidade: e.target.value,
            btnVisivel: true
         }
      }
   }

   var handleSubmit = (e) => {
      e.preventDefault();

      update(item.produto.id, state.quantidade);

      state.btnVisivel = false;
   }

   var handleRemove = () => { remove(item.produto.id); }

   return (
      <div className="row">

         <div className="col-xs-2">
            <img alt="imagem do produto" className="img-responsive" src={ item.produto.image } />
         </div>

         <div className="col-xs-4">
            <h4 className="product-name"><strong>{ item.produto.title }</strong></h4>
         </div>

         <div className="col-xs-6">
            <div className="col-xs-3 text-right">
                <h6><strong>{ item.produto.price } <span className="text-muted">x</span></strong></h6>
            </div>

            <form onSubmit={ handleSubmit }>
               <div className="col-xs-4">
                  <input type="number"
                     className="form-control input-sm"
                     onChange={ handleChange }
                     value={ state.quantidade } 
                  />
               </div>

               {
                  state.btnVisivel ? (
                     <div className="col-xs-2">
                        <button type="submit" className="btn btn-info">Atualizar</button>
                     </div>
                  ) : null
               }

               <div className="col-xs-2">
                  <button type="button" onClick={ handleRemove } className="btn btn-link btn-xs">
                     <span className="glyphicon glyphicon-trash"></span>
                  </button>
               </div>
            </form>
         </div>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      update: (produtoID, quantidade) => dispatch(updateCartQuant(produtoID, quantidade)),
      remove: (produtoID) => dispatch(removeFromCart(produtoID))
   }
}

export default connect(null, mapDispatchToProps)(Item);