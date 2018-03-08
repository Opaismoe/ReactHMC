import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import '../assets/stylesheets/Home.css'
import cityGif from '../assets/img/city.gif'

const styles = ({
  paper: {
    margin: '15%',
    width: '65%',
    padding: 45,
    textAlign: 'center',
    zIndex: 2,
    position: 'absolute',
    top: 50,
  },
  button: {
    float: 'right',
    marginLeft: 5,
  },
})

class Home extends PureComponent {
    render() {
    const { currentUser } = this.props

    if (!this.props.signedIn) return (
    <div style={{marginTop:150}}>
      <Typography variant='display1' align='center'>
        Log in!
      </Typography>
      <Typography variant='body1' align='center'>
        of maak een account
      </Typography>
    </div> )

    return(
      <div>
        <img src={cityGif} alt='cityGif' style={{width:'100%', zIndex: -1}}/>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            {`Hallo, ${ currentUser.name }`}
          </Typography>
          <Typography variant='body1'>
            Huishoud je huishouden.
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

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
  signedIn: !!currentUser && !!currentUser._id
})

export default connect (mapStateToProps)(Home)
