import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGrocerys } from '../../actions/grocerys/fetch'
import { removeGrocery } from '../../actions/grocerys/remove'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'

export const groceryShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  completed: PropTypes.bool,
})

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

  static propTypes = {
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.props.fetch()
  }

  componentWillReceiveProps() {
    // this.calcPrice()
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
    const { id } = this.props.grocerys
    console.log(id)
    return false
  }

  render() {


    return (
      <div>
        <button onClick={this.calcPrice}>clickkkkmeeee</button>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell numeric>Price</TableCell>
                <TableCell numeric>User id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.grocerys.map(grocery => {
                return (
                  <TableRow key={grocery._id}>
                  {console.log(grocery._id)}
                    <TableCell onClick={this.removeGrocery}>{grocery.text}</TableCell>
                    <TableCell numeric>{grocery.price}</TableCell>
                    <TableCell>{grocery.userId}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
            <span style={{ float:'right' }}>total <h3>{this.state.totalPrice}</h3></span>
            <span style={{ float:'left' }}>left in pot; <h3>{this.state.totalAmount}</h3></span>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })
const mapDispatchToProps = { fetch: fetchGrocerys, removeGrocery }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
