import { LOAD_ERROR, APP_DONE_LOADING, CLEAR_LOAD_ERROR } from '../actions/loading'

export default function (state = null, { type, payload } = {}) {
  switch (type) {
    case LOAD_ERROR:
      return '' + payload

    case CLEAR_LOAD_ERROR:
    return null

    case APP_DONE_LOADING:
      return null

    default :
      return state
  }
}
