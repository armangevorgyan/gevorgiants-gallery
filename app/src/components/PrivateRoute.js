import React, {Component}    from 'react';
import PropTypes             from 'prop-types';
import {connect}             from 'react-redux';
import {Route}               from 'react-router-dom';

import authHelper from 'helpers/authHelper';

import Redirect           from 'components/common/Redirect/Redirect';
import {RootCenterLoader} from 'components/shared/PageCenterLoader/PageCenterLoader';


@connect(
  state => ({
    isRequesting: state.auth.isRequesting,
  }),
  dispatch => ({}),
)
class PrivateRoute extends Component {
  static propTypes = {
    isRequesting: PropTypes.bool,
    component: PropTypes.any,
    path: PropTypes.any,
  };

  render() {
    const {
      isRequesting,
      component: RouteComponent,
      ...rest
    } = this.props;

    let Component;

    if ( authHelper.isRegistered() ) {
      Component = props => {
        return <RouteComponent {...props} />;
      };
    } else if ( isRequesting ) {
      Component = () => <RootCenterLoader />;
    } else {
      Component = () => (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: this.props.location }
          }}
        />
      );
    }

    return <Route {...rest} render={Component} />;
  }
}

export default PrivateRoute;
