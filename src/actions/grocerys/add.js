import { push } from 'react-router-redux'
import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
} from '../loading'

export const ADD_GROCERY = 'ADD_GROCERY'
const api = new API()

export const addGrocery = (newGrocery) => {
  return (dispatch) => {
    if (!api.isAuthenticated()) {
      dispatch(push('sign-in'))
      return
    }
    dispatch({ type: APP_LOADING })

    api.post('/grocerys', newGrocery)
      .then(result => {
        dispatch({
          type: ADD_GROCERY,
          payload: newGrocery
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
