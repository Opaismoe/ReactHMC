// src/reducers/loadError.js
import { LOAD_ERROR, APP_DONE_LOADING, CLEAR_LOAD_ERROR } from '../actions/loading'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case LOAD_ERROR :
      return '' + payload

    case CLEAR_LOAD_ERROR :
    case APP_DONE_LOADING :
      return null

    default :
      return state
  }
}
