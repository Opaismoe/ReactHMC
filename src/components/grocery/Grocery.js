import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

export const groceryShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  completed: PropTypes.bool,
})

class Grocery extends PureComponent {
  static propTypes = {
    ...groceryShape.isRequired,
  }

  render() {
    const { _id ,text, price, completed } = this.props

    return (
      <div>
        <Paper className='groceryPaper'>
          <Table>
           <TableHead>
             <TableRow>
               <TableCell>Product</TableCell>
               <TableCell numeric>Price</TableCell>
               <TableCell numeric>Who?</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow key={_id}>
               <TableCell>{text}</TableCell>
               <TableCell numeric>{price}</TableCell>
             </TableRow>
           </TableBody>
         </Table>
        </Paper>
      </div>
    )
  }
}

export default Grocery
