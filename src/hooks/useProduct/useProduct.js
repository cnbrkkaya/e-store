// a custom hook that will return the value of the context
//Much more efficient than using React.useContext
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext/ProductContext'

export function useProduct() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProduct must be used within a CountProvider')
  }
  return context
}
