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
  completed: PropTypes.bool,
})

class GroceryList extends PureComponent {
  static propTypes = {
    grocerys: PropTypes.arrayOf(groceryShape).isRequired
  }

  componentWillMount() {
    this.props.fetch()
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
                    <TableCell>{grocery.text}</TableCell>
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
const mapDispatchToProps = { fetch: fetchGrocerys }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
