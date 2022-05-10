import { createContext, useReducer, useState } from 'react'

import CartReducer from './CartReducer'

export const CartContext = createContext()

export default function CartContextProvider(props) {
  //Controlling shopping cart visibility
  const [cartVisible, setCartVisible] = useState(false)
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
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        clearCart,
        cartVisible,
        setCartVisible,
      }}>
      {props.children}
    </CartContext.Provider>
  )
}
