import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
//Amplify package
import { Auth, API, graphqlOperation } from 'aws-amplify'
//Graphql operations
import { listProducts } from '../graphql/queries'

export const ProductContext = createContext()

export default function ProductContextProvider(props) {
  const [products, setProducts] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState(null)

  const listProductsHandler = useCallback(async () => {
    try {
      const response = await API.graphql(graphqlOperation(listProducts))
      const result = response.data.listProducts.items
      const otherProducts = result.filter((item) => {
        if (!item.featured) {
          setFeaturedProduct(item)
          return item
        }
      })
      setProducts(otherProducts)
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    listProductsHandler()
  }, [listProductsHandler])

  return (
    <ProductContext.Provider value={{ products, featuredProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProduct must be used within a CountProvider')
  }
  return context
}
