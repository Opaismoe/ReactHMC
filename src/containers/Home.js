import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
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
        <img className='headerImg' src={headerImg}/>
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
            onClick={console.log('link1')}>
            Boodschappen
          </Button>
          <Button
            style={styles.button}
            variant='raised'
            color='primary'
            onClick={console.log('link1')}>
            Week taken
          </Button>
          <Button
            style={styles.button, {float:'left'}}
            variant='raised'
            color='secondary'
            onClick={console.log('link1')}>
            Fotos van katten bekijken
          </Button>
        </Paper>
      </div>
    )
  }
}

export default Home
