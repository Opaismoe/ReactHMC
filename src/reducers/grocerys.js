import { ADD_GROCERY } from '../actions/grocerys/add'
import { FETCHED_GROCERYS } from '../actions/grocerys/fetch'
import { REMOVE_GROCERY } from '../actions/grocerys/delete'
import { TOGGLE_DONE } from '../actions/grocerys/toggle'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      const newGrocery = {...payload}
      return [newGrocery].concat(state)
    case FETCHED_GROCERYS:
      return payload.slice()
    case REMOVE_GROCERY:
      return {...payload}.concat(state)
    case TOGGLE_DONE:
      return state
    default:
      return state
  }
}
