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
  }

  static propTypes = {
    grocerys: PropTypes.arrayOf(groceryShape).isRequired,
  }  
  
  componentWillMount() {
    console.log('componentWillMount')
    this.props.fetch()
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
    console.log(total)
  }

  removeGrocery() {
    const { id } = this.props.grocerys
    console.log(id)
    return false
  }

  render() {


    return (
      <div>
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
