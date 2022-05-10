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
//Creating Product Context
export const ProductContext = createContext()

export default function ProductContextProvider(props) {
  //Initial Product State
  const [state, dispatch] = useReducer(ProductReducer, {
    products: [],
    filteredProducts: [],
  })
  //destructuring state for quicker access
  const products = state?.products
  const filteredProducts = state?.filteredProducts
  //Featured Product State
  const [featuredProduct, setFeaturedProduct] = useState(null)

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

  //Set featured and other products
  function productsHandler(result) {
    //setFeatured Product
    const featured = result.filter((product) => product.featured)
    setFeaturedProduct(featured[0])
    //set other products
    dispatch({
      type: 'SET_PRODUCTS',
      payload: result.filter((product) => !product.featured),
    })
  }

  useEffect(() => {
    //Initial Call to fetch products
    listProductsHandler()
  }, [listProductsHandler])

  //Helper Functions
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
  const filterByCategory = (payload) => {
    dispatch({ type: 'FILTER_BY_CATEGORY', payload })
  }
  const clearFilter = (payload) => {
    dispatch({ type: 'CLEAR_FILTER', payload })
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
          filterByCategory,
          filteredProducts,
          clearFilter,
        }}>
        {props.children}
      </ProductContext.Provider>
    )
  )
}
