import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGrocerys } from '../../actions/grocerys/fetch'
import Grocery, { groceryShape } from './Grocery'


class GroceryList extends PureComponent {
  static propTypes = {
    grocerys: PropTypes.arrayOf(groceryShape).isRequired
  }

  componentWillMount() {
    this.props.fetch()
  }

  renderGrocerys = (grocery, index) => {
    return <Grocery key={index} { ...grocery } />
  }

  render() {
    return (
      <div>
        {this.props.grocerys.map(this.renderGrocerys)}
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })
const mapDispatchToProps = { fetch: fetchGrocerys }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
