export const addToCart = (produto) => {
   return {
      type: 'ADD_TO_CART',
      payload: {
         produto,
         quantidade: 1
      }
   }
};

export const removeFromCart = (produtoID) => {
   return {
      type: 'REMOVE_FROM_CART',
      payload: {
         produtoID: produtoID
      }
   }
};

export const updateCartQuant = (produtoID, quantidade) => {
   return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
         produtoID,
         quantidade: quantidade
      }
   }
};