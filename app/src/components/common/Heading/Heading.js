import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

class Heading extends React.Component {
  render() {
    const {
      size,
      children,
      color,
      inline,
      align,
      testId,
    } = this.props;

    const classNames = ['Heading', 'size-h' + size];

    if (color) {
      classNames.push('color-' + color);
    }

    if (inline) {
      classNames.push('inline');
    }

    if (align) {
      classNames.push('align-' + align);
    }

    switch (size) {
      case 1:
        return <h1 className={classNames.join(' ')} test-id={testId}>{children}</h1>;
      case 2:
        return <h2 className={classNames.join(' ')} test-id={testId}>{children}</h2>;
      case 3:
        return <h3 className={classNames.join(' ')} test-id={testId}>{children}</h3>;
      case 4:
        return <h4 className={classNames.join(' ')} test-id={testId}>{children}</h4>;
      case 5:
        return <h5 className={classNames.join(' ')} test-id={testId}>{children}</h5>;
      case 6:
        return <h6 className={classNames.join(' ')} test-id={testId}>{children}</h6>;
    }
  }
}

Heading.propTypes = {
  size: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6
  ]).isRequired,
  color: PropTypes.string,
  inline: PropTypes.bool,
  align: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
  testId: PropTypes.any,
};

Heading.defaultProps = {
  color: 'text-primary',
  inline: false,
};


const withHeading = (Component, size) => ({...props}) => (
  <Component {...props} size={size}/>
);

export const H1 = withHeading(Heading, 1);
export const H2 = withHeading(Heading, 2);
export const H3 = withHeading(Heading, 3);
export const H4 = withHeading(Heading, 4);
export const H5 = withHeading(Heading, 5);
export const H6 = withHeading(Heading, 6);

export default Heading;
