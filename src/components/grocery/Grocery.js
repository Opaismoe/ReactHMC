import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

export const groceryShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  completed: PropTypes.bool,
})

class Grocery extends PureComponent {
  static propTypes = {
    ...groceryShape.isRequired,
  }

  render() {
    const { text, price, completed } = this.props

    return (
      <div>
        <Paper className='groceryPaper'>
          whaaaattttt!!
        </Paper>
      </div>
    )
  }
}

export default Grocery
