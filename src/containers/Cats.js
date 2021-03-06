import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import CatItem from '../components/cats/CatItem'
import CatData from '../components/cats/CatData'
import '../assets/stylesheets/Cats.sass'

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
        <Typography className='catsContainerTitle' variant='display1'>
          Cats are people too!
        </Typography>
        <div className='catContainer'>
          {CatData.map(this.renderCats)}
        </div>
      </Paper>
    )
  }
}

export default Cats
