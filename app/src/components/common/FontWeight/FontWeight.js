import React     from 'react';
import PropTypes from 'prop-types';

import './FontWeight.scss';


const FontWeight = ({ellipsis, weight, children}) => {
  const classNames = ['FontWeight'];
  if (weight) {
    classNames.push('font-' + weight);
  }
  if (ellipsis) {
    classNames.push('ellipsis');
  }

  return (
    <div className={classNames.join(' ')}>{children}</div>
  );
};

FontWeight.propTypes = {
  weight: PropTypes.oneOf([
    'bold',
    'semibold',
    'regular',
    'light',
  ]),
};

export default FontWeight;
