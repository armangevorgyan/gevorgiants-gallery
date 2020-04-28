import React     from 'react';
import PropTypes from 'prop-types';
import NoImage   from 'assets/images/no-image.svg';
import './BackgroundImage.scss';


const BackgroundImage = ({
                           className,
                           styles,
                           source,
                           width,
                           height,
                           borderRadius,
                           backgroundColor
                         }) => {
  const classNames = ['BackgroundImage'];
  if (className) {
    classNames.push(className);
  }
  if (backgroundColor) {
    classNames.push('color-' + backgroundColor);
  }
  return (
    <div
      className={classNames.join(' ')}
      style={{
        ...styles,
        backgroundImage: `url(${source || NoImage})`,
        height: height || '100vh',
        width: width || 'auto',
        borderRadius: borderRadius || 0
      }}
    />
  );
};

BackgroundImage.propTypes = {
  source: PropTypes.string,
};
BackgroundImage.defaultProps = {
  styles: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderRadius: 0
  },
  className: ''
};

export default BackgroundImage;
