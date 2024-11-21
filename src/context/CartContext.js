import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  decrementCartItemQuantity: () => {},
  incrementCartItemQuantity: () => {},
})

export default CartContext
