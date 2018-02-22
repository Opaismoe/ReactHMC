import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export const groceryShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  completed: PropTypes.bool,
})

class Grocery extends PureComponent {
  static propTypes = {
    ...groceryShape.isRequired,
  }

  render() {
    const { _id, text, price, completed } = this.props

    return (
      <div>
        <h1>{text}</h1>
        <h1>{price}</h1>
      </div>
    )
  }
}

export default Grocery
