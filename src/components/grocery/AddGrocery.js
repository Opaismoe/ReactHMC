import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FormContorlLabel, FormHelperText, FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { addGrocery } from '../../actions/grocerys/add'

export class AddGrocery extends PureComponent {
  constructor() {
    super()
    this.state = {
      text: '',
      price: 0,
      completed: false,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault()
    this.props.addGrocery({ ...this.state})
  }

  render() {
    const { text, price } = this.state

    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
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
            <TextField
              id='price'
              type='number'
              label='prijs'
              onChange={this.handleChange('price')}
            />
            <FormHelperText id='text-error-text'>
              {this.state.textError}
            </FormHelperText>
          </FormControl>
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
