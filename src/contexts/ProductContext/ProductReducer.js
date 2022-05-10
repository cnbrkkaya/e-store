export default function ProductReducer(state, action) {
  //copy products state for not to mutate the original state
  const copyProducts = state ? [...state.products] : []

  switch (action.type) {
    case 'SET_PRODUCTS':
      //Initial Sorting is Alphabetical
      const initialSort = action.payload.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return { ...state, products: initialSort }

    //Alphabetical Sorting
    case 'SORT_BY_ALPHABETICALLY':
      const alphabeticallySorted = copyProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })

      return { ...state, products: alphabeticallySorted }

    //Sorting by Price
    case 'SORT_BY_PRICE':
      const sortedByPrice = copyProducts.sort((a, b) => {
        return a.price - b.price
      })
      return { ...state, products: sortedByPrice }
    //Sorting by Price (Ascending)
    case 'ASCENDING':
      const ascendingOrder = copyProducts.sort((a, b) => {
        return b.price - a.price
      })
      return { ...state, products: ascendingOrder }

    //Sorting by Price (Descending)
    case 'DESCENDING':
      const descendingOrder = copyProducts.sort((a, b) => {
        return a.price - b.price
      })
      return { ...state, products: descendingOrder }

    //Filter by specific  Category
    case 'FILTER_BY_CATEGORY':
      const filteredByCategory = copyProducts.filter((product) => {
        return action.payload.includes(product.category)
      })

      if (filteredByCategory.length > 0) {
        return { ...state, filteredProducts: filteredByCategory }
      } else {
        return { ...state, filteredProducts: null }
      }

    //Clearing all filters and return original state
    case 'CLEAR_FILTER':
      return { ...state, filteredProducts: [] }

    default:
      return state
  }
}
