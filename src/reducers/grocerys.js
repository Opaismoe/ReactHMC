import { ADD_GROCERY } from '../actions/grocerys/add'
import { FETCHED_GROCERYS } from '../actions/grocerys/fetch'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      const newGrocery = {...payload}
      return [newGrocery].concat(state)
    case FETCHED_GROCERYS:
      return payload.slice()
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
