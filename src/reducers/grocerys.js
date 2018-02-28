import { ADD_GROCERY } from '../actions/grocerys/add'
import { FETCHED_GROCERYS } from '../actions/grocerys/fetch'
import { REMOVE_GROCERY } from '../actions/grocerys/remove'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      const newGrocery = {...payload}
      return [newGrocery].concat(state)
    case FETCHED_GROCERYS:
      return payload.slice()
    case REMOVE_GROCERY:
      return payload.slice()
    default:
      return state
  }
}







// toggle
// return state.map(grocery =>
//   (grocery.id === payload.id)
//   ? {...grocery, completed: !grocery.completed}
//   : grocery
// )
