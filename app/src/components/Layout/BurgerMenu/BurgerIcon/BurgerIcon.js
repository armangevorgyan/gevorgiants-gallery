import React from 'react';

import './BurgerIcon.scss';

export default ({ open, ...props }) => (
  <div className={open ? 'burger-icon open' : 'burger-icon'} {...props}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
);
