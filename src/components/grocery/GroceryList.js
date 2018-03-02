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
  completed: PropTypes.bool,
})

class GroceryList extends PureComponent {
  constructor(props) {
    super(props)
      this.removeGrocery = this.removeGrocery.bind(this)
  }

  static propTypes = {
    grocerys: PropTypes.arrayOf(groceryShape).isRequired
  }

  componentWillMount() {
    this.props.fetch()
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
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.grocerys.map(grocery => {
                return (
                  <TableRow key={grocery._id}>
                    <TableCell onClick={this.removeGrocery}>{grocery.text}</TableCell>
                    <TableCell numeric>{grocery.price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })
const mapDispatchToProps = { fetch: fetchGrocerys, removeGrocery }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
