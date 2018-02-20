import React from 'react'
import PropTypes from 'prop-types'
import Grocery from './Grocery'


const GroceryList = ({ grocerys, onGroceryClick }) => (
  <ul>
    {grocerys.map(grocery => (
      <Grocery key={grocery.id} {...grocery} onClick={() => onGroceryClick(grocery.id)} />
    ))}
  </ul>
)

GroceryList.propTypes = {
  grocerys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onGroceryClick: PropTypes.func.isRequired
}

export default GroceryList
