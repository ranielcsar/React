import React from 'react';

const Produto = ({ addToCart, inCart, produto }) => {

   var state = {
      inCart: inCart
   }

   var addCarrinho = (e) => {
      e.preventDefault();

      addToCart(produto);
   }

   console.log(state.inCart)

   return (
      <div className="col-md-3">

         <figure className="card card-product">
            <div className="img-wrap">
               <img alt="imagem do produto" className="img-responsive" src={ produto.image }/>
            </div>

            <figcaption className="info-wrap">
               <h4 className="title">{ produto.title }</h4>
               <p className="desc">{ produto.description }</p>
            </figcaption>

            <div className="bottom-wrap">
               {
                  state.inCart ? (
                     <span className="btn btn-success">Adicionado ao carrinho</span>
                  ) : (
                     <a href="#" onClick={ addCarrinho } className="btn btn-sm btn-primary float-right">
                        Adicionar ao carrinho
                     </a>
                  )
               }

               <div className="price-wrap">
                  <span className="price-new">{ produto.price }</span>
               </div>
            </div>
         </figure>
         
      </div>
   )
}

export default Produto;