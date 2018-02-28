import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const REMOVE_GROCERY = 'REMOVE_GROCERY'
const api = new API()

export const removeGrocery = (id) => {
  console.log(id)
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.delete('/grocerys/:id')
      .then(result => {
        dispatch({
          type: REMOVE_GROCERY,
          payload: {...id}
        })
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
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
