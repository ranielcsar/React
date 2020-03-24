import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

import Produto from './Product';

const ListaProdutos = ({ addToCart, produtos, cart }) => {

   var addCarrinho = (produto) => {
      addToCart(produto);
   }

   return (
      <div className="container">

         <h2>Lista de produtos</h2>
         <br/>

         <div className="row">
            {
               produtos.map( (produto) => (
                  <Produto
                     key={ produto.id }
                     produto={ produto }
                     addToCart={ addCarrinho }
                     inCart={ cart.length > 0 && cart.filter(e => e.produto.id === produto.id).length > 0 }
                  />
               ))
            }
         </div>

      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      produtos: state.produto.produtos,
      cart: state.cart.cart
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addToCart: (produto) => {
         dispatch(addToCart(produto));
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListaProdutos);