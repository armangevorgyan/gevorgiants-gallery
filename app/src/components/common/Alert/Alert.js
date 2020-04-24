import React     from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/common/Flex/Flex';
import Icon from 'components/common/Icon/Icon';


import Colors from 'styles/colors.scss';
import './Alert.scss';


const colors = {
  success: Colors['primary'],
  error: Colors['alert-error'],
  warning: Colors['alert-info'],
  info: Colors['text-primary'],
};

const Alert = ({
                 children,
                 alertType,
                 iconName,
                 iconSize,
                 iconColor,
                 className,
                 fluid,
                 inline,
               }) => {


  const classNames = ['Alert', className];
  classNames.push(`type-${alertType}`);

  if (fluid) {
    classNames.push('fluid');
  }

  return (
    <Flex
      row
      align={'center'}
      className={classNames.join(' ')}
      spaces={inline ? [] : ['pl-3 p-2 pr-8']}
    >
      {iconName && <Flex
        width={iconSize}
        height={iconSize}
        spaces={['mr-2']}
      >
        <Icon
          icon={iconName}
          color={iconColor || colors[alertType]}
          size={iconSize}
        />
      </Flex>}

      <Flex>
        {children}
      </Flex>
    </Flex>
  );
};

Alert.propTypes = {
  alertType: PropTypes.oneOf([
    'success',
    'error',
    'warning',
    'info',
  ]),
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  inline: PropTypes.bool,
};

Alert.defaultProps = {
  className: '',
  alertType: 'success',
  fluid: false,
  iconSize: 20,
  inline: false,
};

export default Alert;
