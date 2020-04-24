import React     from 'react';
import PropTypes from 'prop-types';
import Icon      from 'components/common/Icon/Icon';
import './IconWithBackground.scss';


const IconWithBackground = (
  {
    iconProps,
    backgroundProps,
    onClick,
    disabled,
    className,
  },
) => {

  const classNames = ['IconWithBackground', className];
  if ( backgroundProps.backgroundColor ) {
    if ( !backgroundProps.backgroundColor.startsWith('#') ) {
      classNames.push('background-color-' + backgroundProps.backgroundColor);
    }
  }
  return <div
    className={ ` ${ classNames.join(' ') } ${ disabled ? 'IconWithBackground_disabled' : '' }` }
    style={ {
      borderRadius: backgroundProps.borderRadius ?? '50%',
      border: backgroundProps.border,
      height: backgroundProps.height || 30 + 'px',
      width: backgroundProps.width || 30 + 'px',
    } }
    onClick={ onClick }
  >
    <Icon
      icon={ iconProps.icon }
      size={ iconProps.size }
      color={ iconProps.color }
    />
  </div>;
};

IconWithBackground.propTypes = {
  backgroundProps: PropTypes.shape({
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  iconProps: PropTypes.shape({
    color: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

IconWithBackground.defaultProps = {
  backgroundProps: {
    backgroundColor: 'neutral-white',
    border: '',
    borderRadius: '50%',
    height: 30,
    width: 30,
  },
  iconProps: {
    color: 'orange-300',
    icon: 'check',
    size: 16,
  },
  disabled: false,
  className: '',
  onClick: () => {
  },
};

export default IconWithBackground;
