import React     from 'react';
import PropTypes from 'prop-types';

import './Chip.scss';


const Chip = ({item, onRemove, className}) => (
  <div className={`Chip ${className || ''}`}>
    {item.label}
    {onRemove && (
      <div
        className="Chip-close ml-3"
        onClick={e => onRemove(item.value, item)}
      >
        x
      </div>
    ) || null}
  </div>
);

Chip.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    value: PropTypes.any,
  }),
  onRemove: PropTypes.func,
};

export default Chip;
