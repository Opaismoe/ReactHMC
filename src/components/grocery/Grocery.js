import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

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
        <Paper>
          <Typography variant='display1'>
            {text}
          </Typography>
          <Typography variant='display1'>
            {price}
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default Grocery
