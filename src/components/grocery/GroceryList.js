import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGrocerys } from '../../actions/grocerys/fetch'
import Grocery from './Grocery'


class GroceryList extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    completed: PropTypes.bool
  }

  componentWillMount() {
    this.props.dispatch(fetchGrocerys())
  }

  renderGrocerys = (grocery, index) => {
    return <Grocery key={index} { ...grocery } />
  }

  render() {
    return (
      <div>
        temp info
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })
const mapDispatchToProps = { fetch: fetchGrocerys }

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)
