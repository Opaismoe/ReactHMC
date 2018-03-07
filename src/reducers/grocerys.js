import { ADD_GROCERY } from '../actions/grocerys/add'
import { FETCHED_GROCERYS } from '../actions/grocerys/fetch'
import { REMOVE_GROCERY } from '../actions/grocerys/delete'
import { TOGGLE_DONE } from '../actions/grocerys/toggle'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      return state.concat(payload)
    case FETCHED_GROCERYS:
      return payload.slice()
    case REMOVE_GROCERY:
      return {...payload}.concat(state)
    case TOGGLE_DONE:
      const completed = state.filter(gro => gro._id !== payload._id)
      return completed.concat(payload)
    default:
      return state
  }
}
