import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import {url}            from 'helpers/router';
import {isExternalLink} from 'helpers/url';

import './Link.scss';

// const localizeLink = (to) => {
//   let newTo = to;
//
//   if (typeof to === 'object') {
//     newTo.pathname = url(newTo.pathname);
//   }
//   else {
//     newTo = url(newTo);
//   }
//   return newTo;
// };


const Link = ({
                to,
                children,
                className,
                color,
                exact,
                fluid,
                testId,
                ...restProps
              }) => {

  const classNames = ['Link', className];
  classNames.push('color-' + color);

  if (fluid) {
    classNames.push('fluid');
  }

  if (typeof to === 'string' && isExternalLink(to)) {
    return <a
      {...restProps}
      href={to}
      className={classNames.join(' ')}
    >
      {children}
    </a>;
  }
  else {
    return (
      <NavLink
        {...restProps}
        to={url(to)}
        exact={exact}
        className={classNames.join(' ')}
      >
        {children}
      </NavLink>
    );
  }
};

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  replace: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  style: PropTypes.object,
  exact: PropTypes.bool,

  onClick: PropTypes.func,
  fluid: PropTypes.bool,
  innerRef: PropTypes.func,
  target: PropTypes.oneOf([
    '_blank',
    '_self',
    '_parent',
    '_top',
  ]),
};

Link.defaultProps = {
  onClick: () => null,
  style: {},
  className: '',
  color: 'primary',
  exact: true,
};

export default Link;
