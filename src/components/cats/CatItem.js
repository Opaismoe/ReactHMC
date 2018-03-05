import React, { PureComponent } from 'react'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button';

const styles = {
  card: {
    maxWidth: 345,
  },
};

class CatItem extends PureComponent {
  render() {
    const { name, summary, photo} = this.props
    return (
      <div style={{ minWidth: 400}}>
        <Card className={styles.card}>
          <img src={ photo } alt='cat' />
          <CardContent>
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
