let nextGroceryId = 0
export const addGrocery = text => {
  return {
    type: 'ADD_GROCERY',
    id: nextGroceryId++,
    text
  }
}

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
