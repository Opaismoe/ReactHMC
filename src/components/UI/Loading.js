import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { LinearProgress } from 'material-ui/Progress'

class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
  }
  render() {
    const { loading } = this.props
    if (!loading) return null

    return (
      <div>
        <LinearProgress color='secondary' />
      </div>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading,
})

export default connect(mapStateToProps)(Loading)
