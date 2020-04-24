import React     from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/common/Flex/Flex';

import './ProgressBar.scss';


const ProgressBar = ({percentage}) => {
  return <Flex
    className={'ProgressBar'}
    width={'100%'}
  >
    <Flex
      className={'ProgressBarInner'}
      style={{width: `${percentage}%`}}
    />
  </Flex>;
};

ProgressBar.propTypes = {
  percentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])
};

export default ProgressBar;
