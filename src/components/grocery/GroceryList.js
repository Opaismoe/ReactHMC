import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import GroceryItem from './GroceryItem'

class GroceryList extends PureComponent {
  constructor(props) {
    super(props)
      this.state = {
        totalPrice: 0,
        totalAmount: 50,
      }
      this.totalPrice = this.totalPrice.bind(this)
      this.removeGrocery = this.removeGrocery.bind(this)
      this.calcPrice = this.calcPrice.bind(this)
  }

  totalPrice(sum) {
    this.setState({
      totalAmount: this.state.totalAmount - sum,
      totalPrice: this.state.totalPrice + sum
    })
  }

  calcPrice() {
    let total = this.props.grocerys.map(g => {
      return g.price
    })
    const sum = total.reduce((prev, next) => prev+next)
    return this.totalPrice(sum)
  }

  removeGrocery() {
    return false
  }

  render() {
    return (
      <div>
        <GroceryItem/>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({
  grocerys,
})

export default connect(mapStateToProps)(GroceryList)
