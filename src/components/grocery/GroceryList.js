import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGrocerys } from '../../actions/grocerys/fetch'
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
  static propTypes = {
    grocerys: PropTypes.arrayOf(groceryShape).isRequired,
  }

  constructor(props) {
    super(props)
  
    this.state = {
       totalPrice: 0,
       totalAmount: 10,
    }
    this.totalPrice = this.totalPrice.bind(this)
  }
  
  
  componentWillMount() {
    this.props.fetch()
    this.totalPrice()
  }
  
  //TODO refactor this 
  totalPrice() {
    let total = this.state.totalPrice
    this.props.grocerys.map(grocery => {
      return total += grocery.price
    })
    this.setState({
      totalAmount: this.state.totalAmount - total,
      totalPrice: this.state.totalPrice + total
    })
  }

  render() {  
    const { totalPrice, totalAmount } = this.state

    return (
      <div>
        <button onClick={this.totalPrice}>click me for total price</button>
          {this.props.grocerys.map(groc => {
            console.log(groc.price)
          })
          }
        <Paper>
          wat?
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
                    <TableCell>{grocery.text}</TableCell>
                    <TableCell numeric>{grocery.price}</TableCell>
                    <TableCell>{grocery.userId}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
            <span style={{ float:'right' }}>total <h3>{totalPrice}</h3></span>
            <span style={{ float:'left' }}>left in pot; <h3>{totalAmount}</h3></span>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })
const mapDispatchToProps = { fetch: fetchGrocerys }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
