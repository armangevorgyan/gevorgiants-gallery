import React from 'react';
import PropTypes from 'prop-types';

import withHidableContainer from './withHidableContainer';
import './Flex.scss';

class Flex extends React.Component {
  constructor(props) {
    super(props);
    this.flexRef = React.createRef();
  }
  render() {
    const {
      // Alignment
      align,
      justify,
      children,
      flex,

      // Spacing
      spaces,

      // Direction
      row,
      column,

      // Grid
      container,
      wrap,

      xs,
      sm,
      md,
      lg,
      xlg,

      // Sizing
      width,
      height,

      // Events
      onClick,
      onMouseEnter,
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave,
      onFocus,

      // Styling
      className,
      style,
      id,

      testId,
    } = this.props;

    const classNames = [className];
    let styles = {};

    // Alignment
    if (align) {
      classNames.push('align-' + align);
    }

    if (justify) {
      classNames.push('justify-' + justify);
    }

    if (flex) {
      styles.flex = flex;
    }

    // Direction
    if (row) {
      styles.flexDirection = row === true ? 'row' : 'row-reverse';
    }
    else if (column) {
      styles.flexDirection = column === true ? 'column' : 'column-reverse';
    }

    // Grid
    if (wrap === true) {
      styles.flexWrap = 'wrap';

      classNames.push('wrapped');
    }
    else if (wrap) {
      styles.flexWrap = wrap;

      classNames.push('wrapped');
    }

    if (container) {
      classNames.push('container');
    }

    // Sizing
    if (width) {
      styles.width = width;
    }

    if (height) {
      styles.height = height;
    }

    // Styling
    if (style) {
      styles = {...styles, ...style};
    }

    if (xs) classNames.push(`col-xs-${xs}`);
    if (sm) classNames.push(`col-sm-${sm}`);
    if (md) classNames.push(`col-md-${md}`);
    if (lg) classNames.push(`col-lg-${lg}`);
    if (xlg) classNames.push(`col-xlg-${xlg}`);
    if(onClick) classNames.push('cursor');

    return (
      <div
        test-id={testId}
        id={id}
        className={'Flex ' + classNames.join(' ') + ' ' + spaces.join(' ')}
        style={styles}

        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        ref={this.flexRef}
      >
        {children || null}
      </div>
    );
  }
}

Flex.propTypes = {
  // Alignment
  children: PropTypes.any,
  align: PropTypes.oneOf(['start', 'end', 'center', 'initial']),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-evenly', 'space-between', 'initial']),
  flex: PropTypes.string,

  // Spacing
  spaces: PropTypes.array,

  // Direction
  row: PropTypes.any,
  column: PropTypes.any,

  // Grid
  container: PropTypes.bool,
  wrap: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xlg: PropTypes.number,

  // Sizing
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  // Styling
  className: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.any,

  testId: PropTypes.any,

  // Events
  onMouseEnter: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
};

Flex.defaultProps = {
  align: 'initial',
  justify: 'initial',
  spaces: [],
  row: false,
  column: false,
  className: '',
};

Flex = withHidableContainer(Flex);

export default Flex;
