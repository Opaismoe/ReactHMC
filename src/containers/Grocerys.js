import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AddGrocery, GroceryItem }from '../components/grocery/'
import { fetchGrocerys } from '../actions/grocerys/fetch'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import '../assets/stylesheets/Home.css'

const styles = ({
  paper: {
    margin: 60,
    padding: 45,
    textAlign: 'center',
  },
  button: {
    float: 'right',
    marginLeft: 5,
  },
})

export const groceryShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
})

class Grocerys extends PureComponent {
  static propTypes = {
    ...groceryShape.isRequired,
  }

  componentWillMount() {
    this.props.fetchGrocerys()
  }

  renderGrocerys(grocery) {
    const id = grocery._id
    return <GroceryItem key={id} {...grocery} />
  }

  render() {
    return(
      <div>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Boodschappen
          </Typography>
          <Typography variant='body1'>
            Huishoudgeld
          </Typography>
          <AddGrocery />
          {this.props.grocerys.map(this.renderGrocerys)}
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })

const mapDispatchToProps = {
  fetchGrocerys,
}

 export default connect(mapStateToProps, mapDispatchToProps)(Grocerys)
