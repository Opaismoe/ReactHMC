import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
} from '../loading'

export const TOGGLE_DONE = 'TOGGLE_DONE'
const api = new API()

export const toggleDone = (completed, groceryId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    api.put(`/grocerys/${groceryId}`, completed)
      .then(result => {
        dispatch({
          type: TOGGLE_DONE,
          payload: result.body
        })
        dispatch({ type: APP_DONE_LOADING })
        console.log(completed, groceryId)
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
