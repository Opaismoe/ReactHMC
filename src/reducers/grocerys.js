import { ADD_GROCERY } from '../actions/grocerys/add'
import { FETCHED_GROCERYS } from '../actions/grocerys/fetch'

export default function(state = [], {type, payload} = {}) {
  switch (type) {
    case ADD_GROCERY:
      const newGrocery = {...payload}
      return [newGrocery].concat(state)
    case FETCHED_GROCERYS:
      return payload.slice()
    default:
      return state
  }
}
