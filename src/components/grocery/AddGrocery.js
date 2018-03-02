import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FormHelperText, FormControl } from 'material-ui/Form'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { addGrocery } from '../../actions/grocerys/add'
import '../../assets/stylesheets/AddGrocery.css'

export class AddGrocery extends PureComponent {
  constructor() {
    super()
    this.state = {
      text: '',
      price: 0,
      completed: false,
    }
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault()
    this.props.addGrocery(this.state)
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

          <FormControl>
            <InputLabel htmlFor="prijs" shrink={true}>Prijs</InputLabel>
            <Input
              id="price"
              type='float'
              onChange={this.handleChange('price')}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
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

export default connect (mapStateToProps, {
  addGrocery,
})(AddGrocery)
