import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import CatItem from '../components/cats/CatItem'
import CatData from '../components/cats/CatData'

const styles = ({
  paper: {
    margin: 60,
    padding: 45,
    textAlign: 'center',
  },
})

class Cats extends PureComponent {
  renderCats(cats, index) {
    return <CatItem key={index} {...cats} />
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <Typography className='cats' variant='display1'>
          Cats are people too!
        </Typography>
        {CatData.map(this.renderCats)}
      </Paper>
    )
  }
}

export default Cats
