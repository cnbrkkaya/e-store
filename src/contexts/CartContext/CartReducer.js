export default function CartReducer(state, action) {
  console.log('state', state)
  console.log('action', action)

  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    case 'REMOVE_ITEM':
      return state.filter((product) => product.id !== action.payload.id)
    case 'CLEAR':
      return []
    default:
      return state
  }
}
