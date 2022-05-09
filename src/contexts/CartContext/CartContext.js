import { createContext, useReducer } from 'react'

import CartReducer from './CartReducer'

export const CartContext = createContext()

export default function CartContextProvider(props) {
  //get initial state from localstorage
  const [cartProducts, dispatch] = useReducer(
    CartReducer,
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload })
  }

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addProduct, removeProduct, clearCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
