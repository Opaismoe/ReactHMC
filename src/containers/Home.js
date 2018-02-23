import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'
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

class Home extends PureComponent {
  render() {
    return(
      <div>
        <img alt='dirk hartogh' className='headerImg' src={headerImg}/>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Hallo,
          </Typography>
          <Typography variant='body1'>
            Huishoud je huishouden, wat wil je precies doen?
          </Typography>
          <Button
            style={styles.button}
            variant='raised'
            color='primary'
            component={Link}
            to="/grocerys">
            Boodschappen
          </Button>
          <Button
            style={styles.button}
            variant='raised'
            color='primary'
            component={Link}
            to='/tasks'>
            Week taken
          </Button>
          <Button
            style={{float:'left'}}
            variant='raised'
            color='secondary'
            component={Link}
            to='/CatsArePeopleToo'>
            Fotos van katten bekijken
          </Button>
        </Paper>
      </div>
    )
  }
}

export default Home
