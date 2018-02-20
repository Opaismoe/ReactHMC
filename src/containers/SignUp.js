import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import signUp from '../actions/user/sign-up'
import { FormControl, FormHelperText } from 'material-ui/Form'
import validate from 'validate.js'

const dialogStyle = {
  width: '600px',
  margin: '50px auto',
  padding: '3rem'
}

export class SignUp extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired
  }

  state = {}

  submitForm(event) {
    event.preventDefault()

    const {
      name,
      email,
      password,
    } = this.state

    if (this.validateAll()) {
      const user = {
        name: name,
        email: email,
        password: password,
      }
      this.props.signUp(user)
    }
    return false
  }

  cancel() {
    this.props.push('/')
  }

  validateAll() {
    const {
      name,
      email,
      password,
      passwordConfirmation
    } = this.state
    return (
      this.validateName(name) &&
      this.validateEmail(email) &&
      this.validatePassword(password) &&
      this.validatePasswordConfirmation(passwordConfirmation)
    )
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })

    switch (name) {
      case 'email':
        this.validateEmail(event.target.value)
        break
      case 'name':
        this.validateName(event.target.value)
        break
      case 'password':
        this.validatePassword(event.target.value)
        break
      case 'passwordConfirmation':
        this.validatePasswordConfirmation(event.target.value)
        break
      default:
        return false
    }
  }

  validateEmail(email) {
    const validationMsg = validate.single(email, {
      presence: true,
      email: true
    })
    if (!!validationMsg && email.length > 0) {
      this.setState({
        emailError: validationMsg
      })
      return false
    }

    this.setState({
      emailError: null
    })
    return true
  }

  validateName(name) {
    const validationMsg = validate.single(name, {
      presence: true,
      length: {
        minimum: 2,
        message: "name can't be too short."
      }
    })

    if (!!validationMsg) {
      this.setState({
        nameError: validationMsg
      })
      return false
    }

    this.setState({
      nameError: null
    })
    return true
  }

  validatePassword(password) {
    const validationMsg = validate.single(password, {
      presence: true,
      length: {
        minimum: 6,
        message: 'must be at least 6 characters'
      }
    })

    if (!!validationMsg) {
      this.setState({
        passwordError: validationMsg
      })
      return false
    }

    this.setState({
      passwordError: null
    })
    return true
  }

  validatePasswordConfirmation(passwordConfirmation) {
    const { password } = this.state

    if (passwordConfirmation !== password && password.length > 5) {
      this.setState({
        passwordConfirmationError: 'password confirmation is different'
      })
      return false
    }

    this.setState({
      passwordConfirmationError: null
    })
    return true
  }

  render() {

    return (
      <Paper style={dialogStyle}>
        <form onSubmit={this.submitForm.bind(this)}>
          <FormControl className="formControl">
            <TextField
              id="name"
              error={!!this.state.firstNameError}
              type="text"
              placeholder="Name"
              onChange={this.handleChange('name')}
            />
            <FormHelperText
              style={{ marginBottom: 6, marginTop: 6 }}
              id="name-error-text"
            >
              {this.state.firstNameError}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField
              id="email"
              error={!!this.state.emailError}
              type="email"
              placeholder="Email address"
              onChange={this.handleChange('email')}
            />
            <FormHelperText
              style={{ marginBottom: 6, marginTop: 6 }}
              id="email-error-text"
            >
              {this.state.emailError}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField
              id="password"
              error={!!this.state.passwordError}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={this.handleChange('password')}
            />
            <FormHelperText
              style={{ marginBottom: 6, marginTop: 6 }}
              id="password-error-text"
            >
              {this.state.passwordError}
            </FormHelperText>
          </FormControl>
          <FormControl fullWidth className="formControl">
            <TextField
              id="passwordConfirmation"
              error={!!this.state.passwordConfirmationError}
              type="password"
              placeholder="Password Confirmation"
              autoComplete="current-password"
              onKeyUp={this.handleChange('passwordConfirmation')}
              onChange={this.handleChange('passwordConfirmation')}
            />
            <FormHelperText
              style={{ marginBottom: 6, marginTop: 6 }}
              id="passwordConfirmation-error-text"
            >
              {this.state.passwordConfirmationError}
            </FormHelperText>
          </FormControl>
          <Button
            style={{float:'right'}}
            variant='raised'
            color='primary'
            onClick={this.submitForm.bind(this)}>
            Submit
          </Button>
        </form>
      </Paper>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
