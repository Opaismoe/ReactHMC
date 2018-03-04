import React, { PureComponent } from 'react'
import { groceryShape } from '../../containers/Grocerys'

class GroceryItem extends PureComponent {
  static propTypes = {
    ...groceryShape,
  }

  render() {
    const { text, price, _id } = this.props

    return (
      <div>
        <p key={_id}>
          <span className='groceryTitle' onClick={this.removeGrocery}>{text}</span>
          <span className='groceryPrice'>{price}</span>
        </p>
      </div>
    )
  }
}


export default GroceryItem
