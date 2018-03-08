import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FormHelperText, FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { addGrocery } from '../../actions/grocerys/add'
import validate from 'validate.js'
import '../../assets/stylesheets/AddGrocery.css'

export class AddGrocery extends PureComponent {
  constructor() {
    super()
    this.state = {
      text: '',
      price: 0,
      completed: false,
      user:''
    }
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })

    switch (name) {
      case 'name':
        this.validateName(event.target.value)
        break
      case 'price':
        this.validatePrice(event.target.value)
        break
      default:
        return false
    }
  }

  validateAll() {
    const {
      text,
      price,
    } = this.state
    return (
      this.validateName(text) &&
      this.validatePrice(price)
    )
  }

  validateName(name) {
    const validationMsg = validate.single(name, {
      presence: true,
      length: {
        minimum: 2,
        message: "Lijkt mij wat te kort voor een naam"
      }
    })

    if (!!validationMsg) {
      this.setState({
        textError: validationMsg
      })
      return false
    }

    this.setState({
      textError: null
    })
    return true
  }

  validatePrice(price) {
    const validationMsg = validate.single(price, {
      presence: true,
      numericality: {
        onlyInteger: true,
        greaterThan: 0,
        lessThanOrEqualTo: 300,
      }
    })

    if (!!validationMsg) {
      this.setState({
        priceError: validationMsg
      })
      return false
    }

    this.setState({
      priceError: null
    })
    return true
  }

  submitForm(event) {
    event.preventDefault()
    const {
      text,
      price,
    } = this.state

    if (this.validateAll()) {
      const grocery = {
        text: text,
        price: price
      }
      this.props.addGrocery(grocery)
    }
  }

  render() {

    return (
      <div className='addGroceryForm'>
        <form onSubmit={this.submitForm}>
          <FormControl>
            <TextField
              id='text'
              type='text'
              label='naam van product'
              onChange={this.handleChange('text')}
            />
            <FormHelperText id='text-error-text'>
              {this.state.textError}
            </FormHelperText>
          </FormControl>
          <FormControl className='inputPrice'>
            <TextField
              id='price'
              type='float'
              label='prijs'
              onChange={this.handleChange('price')}
            />
          </FormControl>
          <FormHelperText id='price-error-text'>
            {this.state.priceError}
          </FormHelperText>

          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ grocerys }) => ({ grocerys })

export default connect ( mapStateToProps, {
  addGrocery,
})( AddGrocery )
