import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import { Footer, GroceryList }from '../components/grocery/'
import AddGrocery from './AddGrocery'
import VisibleGroceryList from './VisibleGroceryList'
import headerImg from '../assets/img/headerImg.jpg'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
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

class Grocerys extends PureComponent {

  render() {
    return(
      <div>
        <img className='headerImg' src={headerImg}/>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Boodschappen
          </Typography>
          <Typography variant='body1'>
            Huishoudgeld
          </Typography>
          <AddGrocery/>
          <VisibleGroceryList/>
          <Footer/>
        </Paper>
      </div>
    )
  }
}

export default Grocerys
