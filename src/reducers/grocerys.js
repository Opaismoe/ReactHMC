
const grocerys = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROCERY':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          price: action.price,
          completed: false
        }
      ]
    case 'TOGGLE_DONE':
      return state.map(grocery =>
        (grocery.id === action.id)
          ? {...grocery, completed: !grocery.completed}
          : grocery
      )
    default:
      return state
  }
}

export default grocerys
