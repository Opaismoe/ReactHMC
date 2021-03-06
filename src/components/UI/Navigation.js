import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import signOut from '../../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  signOut = (event) => {
    event.preventDefault()
    this.props.signOut()
  }

  signUp = () => {
    this.props.push('/sign-up')
  }

  goHome = () => {
    this.props.push('/')
  }

  signIn = () => {
    this.props.push('/sign-in')
  }

  render() {
    const { signedIn } = this.props

    return (
      <div style={styles.root}>
      <AppBar position='static' >
        <Toolbar>
          <Typography variant="headline" color="inherit" style={styles.flex}>
            HMS
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            style={styles.flex}
            component={Link}
            to='/'>
            Household Management System
          </Typography>
          {signedIn ? <Button variant='raised' color='secondary'  style={{float:'right', width:100, marginLeft:10}} onClick={this.signOut.bind(this)}>Sign out</Button> :
            <Button variant='raised' color='secondary' style={{float:'right'}} onClick={this.signIn.bind(this)}>Sign in</Button>}
          {signedIn ? null : <Button variant='raised' color='secondary'  style={{float:'right', width:100, marginLeft:10}} onClick={this.signUp}>Sign up</Button> }
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)
