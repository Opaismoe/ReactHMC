import { connect } from 'react-redux'
import { toggleDone } from '../actions/grocerys/add'
import GroceryList from '../components/grocery/GroceryList'

const getVisibleGrocerys = (grocerys, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return grocerys.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return grocerys.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return grocerys
  }
}

const mapStateToProps = state => {
  return {
    grocerys: getVisibleGrocerys(state.grocerys, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGroceryClick: id => {
      dispatch(toggleDone(id))
    }
  }
}

const VisibleGroceryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default VisibleGroceryList