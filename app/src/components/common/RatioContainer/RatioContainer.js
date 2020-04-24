import React     from 'react';
import PropTypes from 'prop-types';

import useResizeObsrver from 'hooks/useResizeObserver';

import './RatioContainer.scss';


const RatioContainer = ({
                    className,
                    aspectRatio,
                    children,
                  }) => {

  const breakpoint = useResizeObsrver();

  const classNames = ['RatioContainer'];
  if (className) {
    classNames.push(className);
  }

  const style = {};
  const ar = aspectRatio[breakpoint] || aspectRatio.default;
  if(ar.length && ar.length === 2) {
    style.paddingTop = (ar[1] / ar[0] * 100) + '%';
  }

  return <div
    className={classNames.join(' ')}
    style={style}
  >
    <div className={'RatioContainerInner'}>
      {children && children || null}
    </div>
  </div>;
};

RatioContainer.propTypes = {
  className: PropTypes.string,
  aspectRatio: PropTypes.shape({
    xs: PropTypes.arrayOf(PropTypes.number),
    sm: PropTypes.arrayOf(PropTypes.number),
    md: PropTypes.arrayOf(PropTypes.number),
    lg: PropTypes.arrayOf(PropTypes.number),
    default: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default RatioContainer;
