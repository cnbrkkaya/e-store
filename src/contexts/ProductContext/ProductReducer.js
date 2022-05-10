export default function ProductReducer(state, action) {
  //copy products state for not to mutate the original state
  const copyProducts = state ? [...state.products] : []
  const copyFilteredProducts = state ? [...state.filteredProducts] : []
  const { filteredProducts, products } = state

  switch (action.type) {
    case 'SET_PRODUCTS':
      //Initial Sorting is Alphabetical
      const initialSort = action.payload.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return { ...state, products: initialSort }

    //Alphabetical Sorting
    case 'SORT_BY_ALPHABETICALLY':
      if (filteredProducts.length > 0) {
        const alphabeticalSort = copyFilteredProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        return { ...state, filteredProducts: alphabeticalSort }
      } else {
        const alphabeticallySorted = copyProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

        return { ...state, products: alphabeticallySorted }
      }

    //Sorting by Price
    case 'SORT_BY_PRICE':
      if (filteredProducts.length > 0) {
        const priceSort = copyFilteredProducts.sort((a, b) => {
          return a.price - b.price
        })
        return { ...state, filteredProducts: priceSort }
      } else {
        const priceSorted = copyProducts.sort((a, b) => {
          return a.price - b.price
        })
        return { ...state, products: priceSorted }
      }

    //Sorting by Price (Ascending)
    case 'ASCENDING':
      if (filteredProducts.length > 0) {
        const ascendingSort = copyFilteredProducts.sort((a, b) => {
          return a.price - b.price
        })
        return { ...state, filteredProducts: ascendingSort }
      } else {
        const ascendingSorted = copyProducts.sort((a, b) => {
          return a.price - b.price
        })
        return { ...state, products: ascendingSorted }
      }

    //Sorting by Price (Descending)
    case 'DESCENDING':
      if (filteredProducts.length > 0) {
        const descendingSort = copyFilteredProducts.sort((a, b) => {
          return b.price - a.price
        })
        return { ...state, filteredProducts: descendingSort }
      } else {
        const descendingSorted = copyProducts.sort((a, b) => {
          return b.price - a.price
        })
        return { ...state, products: descendingSorted }
      }

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
