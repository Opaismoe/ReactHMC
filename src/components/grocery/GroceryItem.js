import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleDone } from '../../actions/grocerys/toggle'
import '../../assets/stylesheets/GroceryItem.css'

class GroceryItem extends PureComponent {
  componentWillReceiveProps() {

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
        <main  onClick={this.toggleDone.bind(this)} key={_id}>
          {!completed ?
            <span className='title-completed'>name: <strong>{text}</strong></span>
         :  <span className='title-notCompleted'>name: <strong>{text}</strong></span>
         }
          <span className='groceryPrice'>$ {price}</span>
          <span className='groceryUser'>{''}</span>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })

export default connect(mapStateToProps, {toggleDone})(GroceryItem)
