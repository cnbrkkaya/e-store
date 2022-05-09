export default function CartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      //This if statement is to check if the product is already in the cart
      if (!state.find((item) => item.id === action.payload.id)) {
        localStorage.setItem('cart', JSON.stringify([...state, action.payload]))
        return [...state, action.payload]
      } else {
        return [...state]
      }
    case 'REMOVE_ITEM':
      localStorage.setItem(
        'cart',
        JSON.stringify(state.filter((item) => item.id !== action.payload.id))
      )
      return state.filter((product) => product.id !== action.payload.id)
    case 'CLEAR':
      localStorage.setItem('cart', JSON.stringify([]))
      return []
    default:
      return state
  }
}
