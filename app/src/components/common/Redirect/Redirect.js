import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import {Redirect as RouterRedirect} from 'react-router-dom';

class Redirect extends Component {
  render() {
    const {to} = this.props;

    return <RouterRedirect
      to={to}
    />;
  }
}


Redirect.propTypes = {
  to: PropTypes.object
};

export default Redirect;
