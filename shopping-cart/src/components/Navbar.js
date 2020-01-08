import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ cartUpdated, cart }) => {

   cartUpdated();

   let total = 0;

   cart.map( (item) => total += item.produto.price * item.quantidade);

   return (
      <nav className="navbar navbar-default">

         <div className="container-fluid">
            <div className="navbar-header">
               <NavLink className="navbar-brand" to="/">LOJA</NavLink>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                  <li>
                     <NavLink to="/my-cart">
                     {
                        cart.length > 0 ? (
                           <span className="label label-info">{ cart.length } itens: (${ total.toFixed(2) })</span>
                        ) : null                        
                     }
                     <i className="glyphicon glyphicon-shopping-cart"></i> Meu carrinho
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
         
      </nav>
   );
}

const mapStateToProps = (state) => { 
   return {
      cart: state.cart.cart,
      cartUpdated: () => { return true }
   }
};

export default connect(mapStateToProps)(Navbar);