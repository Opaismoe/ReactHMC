import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui/Progress';

export class Loading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    classes: PropTypes.object.isRequired
  }
  render() {
    const { loading, classes } = this.props
    if (!loading) return null

    return (
      <div>
        <CircularProgress thickness={7} />
      </div>
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  loading,
})

export default connect(mapStateToProps)(Loading)
