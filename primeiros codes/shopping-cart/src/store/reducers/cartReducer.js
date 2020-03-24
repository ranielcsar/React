const initialState = {
   cart: []
}

const cartReducer = (state = initialState, action) => {
   let cart = state.cart;

   switch(action.type) {
      case 'ADD_TO_CART':
         cart.push(action.payload);

         return {
            ...state,
            cart: cart
         };

      case 'UPDATE_CART_QUANTITY':
         let item = cart.find( (item) => item.produto.id !== action.payload.produtoID);

         let newCart = cart.filter( (item) => item.produto.id !== action.payload.produtoID);

         item.quantidade = action.payload.quantidade;

         newCart.push(item);

         return {
            ...state,
            cart: newCart
         };

      case 'REMOVE_FROM_CART':
         return {
            ...state,
            cart: cart.filter(item => item.produto.id !== action.payload.produtoID)
         }

      default:
         return state;
   }
}

export default cartReducer;