import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_GROCERYS = 'FETCHED_GROCERYS'

const api = new API()

export const fetchGrocerys = () => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    const path = '/grocerys'
    api.get(path)
      .then(res => {
        dispatch({ type: FETCHED_GROCERYS, payload: res.body })
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
      })
      .catch(error => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
