import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleDone } from '../../actions/grocerys/toggle'
import '../../assets/stylesheets/GroceryItem.css'

class GroceryItem extends PureComponent {
  constructor() {
    super()
    this.state = {
      text: '',
      price: 0,
      completed: false,
      user:''
    }
    this.toggleDone = this.toggleDone.bind(this)
  }


  toggleDone(event) {
    event.preventDefault()
    const completed = {
      completed: !this.props.completed
    }
    this.props.toggleDone(completed, this.props._id)
  }

  render() {
    const { text, price, _id, completed } = this.props

    return (
      <div className='backdrop'>
        <main  onClick={this.toggleDone} key={_id}>
          {!completed ?
          <span className='title-notCompleted'>name: <strong>{text}</strong></span>
          :<span className='title-completed'>name: <strong>{text}</strong></span>
          }
          <span className='groceryPrice'>$ {price}</span>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({
  grocerys
})

export default connect(mapStateToProps, { toggleDone})(GroceryItem)
