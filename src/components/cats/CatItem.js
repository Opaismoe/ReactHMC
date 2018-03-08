import React, { PureComponent } from 'react'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button';
import { CSSTransitionGroup } from 'react-transition-group'
import '../../assets/stylesheets/Cats.css'

class CatItem extends PureComponent {
  render() {
    const { name, summary, photo} = this.props
    return (
      <div className='catItemContainer'>
        <Card className='catCard'>
          <CardContent>
            <CSSTransitionGroup
              transitionName="cats"
              transitionEnterTimeout={1100}
              transitionLeaveTimeout={1100}
              >
              <p key='2'>whaaaaat!</p>
              <img className='catCardImg' src={ photo } key={ photo } alt='cat' />
            </CSSTransitionGroup>
            <Typography variant="headline" component="h2">
              { name }
            </Typography>
            <Typography component="p" style={{ maxWidth: 400, margin: 'auto' }}>
              { summary }
            </Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth size="small" color="primary" style={{ margin: 'auto' }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default CatItem
