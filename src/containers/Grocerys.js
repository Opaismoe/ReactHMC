import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import { Footer, AddGrocery }from '../components/grocery/'
import headerImg from '../assets/img/headerImg.jpg'
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

class Grocerys extends PureComponent {

  render() {
    return(
      <div>
        <img alt='dirk hartogh' className='headerImg' src={headerImg}/>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Boodschappen
          </Typography>
          <Typography variant='body1'>
            Huishoudgeld
          </Typography>
          <AddGrocery/>
          <Footer/>
        </Paper>
      </div>
    )
  }
}

export default Grocerys
