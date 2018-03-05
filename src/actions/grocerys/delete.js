import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
} from '../loading'

export const REMOVE_GROCERY = 'REMOVE_GROCERY'
const api = new API()

export const removeGrocery = (groceryId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    api.delete(`/grocerys/${groceryId}`)
      .then(result => {
        dispatch({
          type: REMOVE_GROCERY,
          payload: result.body
        })
        dispatch({ type: APP_DONE_LOADING })
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
