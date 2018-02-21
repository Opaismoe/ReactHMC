import { ADD_GROCERY } from '../actions/grocerys/add'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      const newGrocery = {...payload}
      return [newGrocery].concat(state)
    // case TOGGLE_DONE:
    //   return state.map(grocery =>
    //   (grocery.id === payload.id)
    //     ? {...grocery, completed: !grocery.completed}
    //     : grocery
    //   )
    default:
      return state
  }
}
