import React, { PureComponent } from 'react'
import { groceryShape } from '../../containers/Grocerys'
import '../../assets/stylesheets/GroceryItem.css'

class GroceryItem extends PureComponent {
  static propTypes = {
    ...groceryShape,
  }

  render() {
    const { text, price, _id, user } = this.props

    return (
      <div className='backdrop'>
        <main  key={_id}>
          <span className='groceryTitle'>name: {text}</span>
          <span className='groceryPrice'>$ {price}</span>
          <span className='groceryUser'>{user.name}</span>
        </main>
      </div>
    )
  }
}


export default GroceryItem
