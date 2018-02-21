import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const ADD_GROCERY = 'ADD_GROCERY'
const api = new API()

export const addGrocery = (newGrocery) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.post('/grocerys', newGrocery)
      .then(result => {
        dispatch({
          type: ADD_GROCERY,
          payload: newGrocery
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

//
// export const addGrocery = text => {
//   return {
//     type: 'ADD_GROCERY',
//     id: nextGroceryId++,
//     text
//   }
// }

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleDone = id => {
  return {
    type: 'TOGGLE_DONE',
    id
  }
}
