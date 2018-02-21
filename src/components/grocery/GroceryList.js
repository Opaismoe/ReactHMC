import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class GroceryList extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    completed: PropTypes.bool
  }

  render() {
    return (
      <div>
        temp info
      </div>
    )
  }
}

export default GroceryList
