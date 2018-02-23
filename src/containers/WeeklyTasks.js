import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import headerImg from '../assets/img/headerImg.jpg'
import Typography from 'material-ui/Typography'

const styles = ({
  paper: {
    margin: 60,
    padding: 45,
    textAlign: 'center',
  },
})

class WeeklyTasks extends PureComponent {
  render() {
    return(
      <div>
        <img alt='dirk hartogh' className='headerImg' src={headerImg}/>
        <Paper style={styles.paper}>
          <Typography variant='display1'>
            Taken
          </Typography>
          <Typography variant='body1'>
            weekelijkse huishoud taken
          </Typography>
        </Paper>
      </div>
    )
  }
}

 export default WeeklyTasks
