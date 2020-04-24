import React     from 'react';
import PropTypes from 'prop-types';

import translate from 'helpers/translate';

class Translate extends React.Component {
  render() {
    const {
      data,
      children,
      upperCase,
      lowerCase
    } = this.props;
    if ( upperCase ) {
      return translate(children, data)?.toUpperCase();
    }
    if ( lowerCase ) {
      return translate(children, data)?.toLowerCase();
    }
    return translate(children, data);
  }
}

Translate.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.number,
    PropTypes.string,
  ])),
  upperCase: PropTypes.bool,
  lowerCase: PropTypes.bool
};

export default Translate;
