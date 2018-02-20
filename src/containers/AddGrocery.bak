import React from 'react'
import { connect } from 'react-redux'
import { addGrocery } from '../actions/grocerys/add'

let AddGrocery = ({ dispatch }) => {
  let input
    return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addGrocery(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Grocery
        </button>
      </form>
    </div>
  )
}
AddGrocery = connect()(AddGrocery)

export default AddGrocery
