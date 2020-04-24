import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import {connect}          from 'react-redux';
import {Route}            from 'react-router-dom';

import {url}      from 'helpers/router';
import authHelper from 'helpers/authHelper';
import Redirect   from 'components/common/Redirect/Redirect';


@connect(
  state => ({
    isRequesting: state.auth.isRequesting,
  })
)
class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.any,
    path: PropTypes.any,
    isRequesting: PropTypes.bool,
  };

  render() {
    const {
      component: RouteComponent,
      ...rest
    } = this.props;

    let Component;

    if (authHelper.isRegistered()) {
      Component = () => (
        <Redirect
          to={{
            pathname: url('/'),
            state: {from: this.props.location}
          }}
        />
      );
    } else {
      Component = props => <RouteComponent {...props} />;
    }

    return <Route {...rest} render={Component} />;
  }
}

export default PublicRoute;
