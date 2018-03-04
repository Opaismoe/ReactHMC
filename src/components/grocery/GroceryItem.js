import React, { PureComponent } from 'react'
import { groceryShape } from '../../containers/Grocerys'
import '../../assets/stylesheets/GroceryItem.css'

class GroceryItem extends PureComponent {
  static propTypes = {
    ...groceryShape,
  }

  render() {
    const { text, price, _id } = this.props

    return (
      <div className='backdrop'>
        <main  key={_id}>
          <span className='groceryTitle'>name: <strong>{text}</strong></span>
          <span className='groceryPrice'>$ {price}</span>
          <span className='groceryUser'>{''}</span>
        </main>
      </div>
    )
  }
}



export default GroceryItem
