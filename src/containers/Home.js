import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'
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

  renderName() {
    const { currentUser } = this.props
    if (currentUser !== null) {
      return <h1>{currentUser.name}</h1>
    }
    return <div>
      <Typography variant='body1'>
        <h1>Losssser!!</h1>
        <p>doe maar eerst inloggen!</p>
      </Typography>
    </div>
  }

  render() {
    return(
      <div>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Hallo,
          </Typography>
            {this.renderName()}
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

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect (mapStateToProps)(Home)
