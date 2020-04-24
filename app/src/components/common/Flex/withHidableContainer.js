import React from 'react';
import PropTypes from 'prop-types';

import breakpoints from 'styles/sizing.scss';


const withHidableContainer = Component => class extends React.Component {
  static propTypes = {
    hidden: PropTypes.object,
  };

  handleBreakpointChange = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    const {
      hidden,
    } = this.props;

    if (hidden) {
      window.addEventListener('onBreakpointChange', this.handleBreakpointChange);
    }
  }

  componentWillUnmount() {
    const {
      hidden,
    } = this.props;

    if (hidden) {
      window.removeEventListener('onBreakpointChange', this.handleBreakpointChange);
    }
  }

  mustBeHidden = () => {
    const {
      hidden,
    } = this.props;

    let hide = false;

    if (hidden) {
      const currentBreakpoint = window.breakpoint;
      const currentBreakpointWidth = parseInt(breakpoints[currentBreakpoint]);

      for (const breakpointName in hidden) {
        const direction = hidden[breakpointName];
        const breakpointWidth = parseInt(breakpoints[breakpointName]);

        if (direction === 'up') {
          if (currentBreakpointWidth > breakpointWidth || currentBreakpoint === breakpointName) {
            hide = true;
          }
        }

        if (direction === 'down') {
          if (currentBreakpointWidth < breakpointWidth || currentBreakpoint === breakpointName) {
            hide = true;
          }
        }

        if (direction === true) {
          if (currentBreakpoint === breakpointName) {
            hide = true;
          }
        }
      }
    }

    return hide;
  };

  render() {
    const {
      children,
      ...restProps
    } = this.props;

    if (!this.mustBeHidden()) {
      return <Component {...restProps}>{children}</Component>;
    }
    else {
      return null;
    }
  }
};

/*
usage:
  hidden={{
    md: 'up'
  }}

  hidden={{
    sm: true
  }}
*/

export default withHidableContainer;
