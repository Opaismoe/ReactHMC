// src/reducers/loadError.js
import { LOAD_ERROR, APP_DONE_LOADING, CLEAR_LOAD_ERROR } from '../actions/loading'

export default (state = 'null errrrrorrrr', { type, payload } = {}) => {
  switch (type) {
    case LOAD_ERROR:
    if (payload instanceof Error) {
      return payload.response.body.message
    }
    return payload

    case CLEAR_LOAD_ERROR:
    return null

    case APP_DONE_LOADING:
      return null

    default :
      return state
  }
}
