// a custom hook that will return the value of the context
//Much more efficient than using React.useContext
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider')
  }
  return context
}
