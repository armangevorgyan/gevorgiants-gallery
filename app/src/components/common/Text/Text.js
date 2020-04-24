import React      from 'react';
import PropTypes  from 'prop-types';

import FontWeight from 'components/common/FontWeight/FontWeight';
import './Text.scss';


class Text extends React.Component {
  render() {
    const {
      children,
      size,
      color,
      align,
      className,
      weight,
      ellipsis,
      testId
    } = this.props;

    const classNames = ['Text', className];

    if (size) {
      classNames.push('font-size-' + size);
    }

    if (color) {
      classNames.push('color-' + color);
    }
    if (align) {
      classNames.push('align-' + align);
    }

    return (
      <div className={classNames.join(' ')} test-id={testId}>
        <FontWeight ellipsis={ellipsis} weight={weight}>
          {children}
        </FontWeight>
      </div>
    );
  }
}

Text.propTypes = {
  color: PropTypes.string,
  ellipsis: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'scale-1',
    'scale-2',
    'scale-3',
    'scale-4',
    'scale-5',
    'scale-6',
    'scale-7',
    'body-default'
  ]),
  weight: PropTypes.oneOf([
    'bold',
    'semibold',
    'regular',
    'light',
  ]),
  testId: PropTypes.string,
};


Text.defaultProps = {
  size: 'scale-6',
  align: 'left',
};

export default Text;
