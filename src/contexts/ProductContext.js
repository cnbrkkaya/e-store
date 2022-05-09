import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
//Amplify package
import { API, graphqlOperation } from 'aws-amplify'
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
      productsHandler(result)
    } catch (err) {
      console.error(err)
    }
  }, [])

  function productsHandler(result) {
    const featured = result.filter((product) => product.featured)
    setFeaturedProduct(featured[0])
    setProducts(result.filter((product) => !product.featured))
  }

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
