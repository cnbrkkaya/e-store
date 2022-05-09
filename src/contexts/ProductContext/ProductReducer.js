export default function ProductReducer(state, action) {
  const copyProducts = state ? [...state] : []

  switch (action.type) {
    case 'SET_PRODUCTS':
      //Initial Sorting is Alphabetical
      const initialSort = action.payload.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return initialSort

    //********************************************************* */

    //Alphabetical Sorting
    case 'SORT_BY_ALPHABETICALLY':
      const alphabeticallySorted = copyProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return alphabeticallySorted
    //********************************************************* */

    //These 3 cases covers all price related sorting  1) initial, 2) ascending, 3) descending
    case 'SORT_BY_PRICE':
      const sortedByPrice = copyProducts.sort((a, b) => {
        return a.price - b.price
      })
      return sortedByPrice
    case 'ASCENDING':
      const ascendingOrder = copyProducts.sort((a, b) => {
        return b.price - a.price
      })
      return ascendingOrder

    case 'DESCENDING':
      const descendingOrder = copyProducts.sort((a, b) => {
        return a.price - b.price
      })
      return descendingOrder
    //********************************************************* */

    default:
      return state
  }
}
