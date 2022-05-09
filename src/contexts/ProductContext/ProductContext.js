import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  useReducer,
} from 'react'
//Amplify package imports
import { API, graphqlOperation } from 'aws-amplify'
//Graphql operations
import { listProducts } from '../../graphql/queries'
//Reducer
import ProductReducer from './ProductReducer'

export const ProductContext = createContext()

export default function ProductContextProvider(props) {
  //Fetch products from the database
  const listProductsHandler = useCallback(async () => {
    try {
      const response = await API.graphql(graphqlOperation(listProducts))
      const result = response.data.listProducts.items
      productsHandler(result)
    } catch (err) {
      console.error(err)
    }
  }, [])
  //Initial Product State
  const [products, dispatch] = useReducer(ProductReducer, null)
  //sort options state, default alphabetically
  const [selectedSortOptions, setSelectedSortOptions] =
    useState('Alphabetically')

  //Featured Product
  const [featuredProduct, setFeaturedProduct] = useState(null)

  //Set featured and other products
  function productsHandler(result) {
    const featured = result.filter((product) => product.featured)
    setFeaturedProduct(featured[0])

    dispatch({
      type: 'SET_PRODUCTS',
      payload: result.filter((product) => !product.featured),
    })
  }

  useEffect(() => {
    listProductsHandler()
  }, [listProductsHandler])

  const sortByPrice = (payload) => {
    dispatch({ type: 'SORT_BY_PRICE', payload })
  }
  const ascendingOrder = (payload) => {
    dispatch({ type: 'ASCENDING', payload })
  }
  const descendingOrder = (payload) => {
    dispatch({ type: 'DESCENDING', payload })
  }
  const sortByAlphabetically = (payload) => {
    dispatch({ type: 'SORT_BY_ALPHABETICALLY', payload })
  }

  return (
    products && (
      <ProductContext.Provider
        value={{
          products,
          featuredProduct,
          sortByPrice,
          sortByAlphabetically,
          ascendingOrder,
          descendingOrder,
        }}>
        {props.children}
      </ProductContext.Provider>
    )
  )
}

// a custom hook that will return the value of the context
//Much more efficient than using React.useContext
export function useProduct() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProduct must be used within a CountProvider')
  }
  return context
}
