import React     from 'react';
import PropTypes from 'prop-types';

import Chip from './Chip';

import './ChipList.scss';


const ChipList = ({items, onRemove}) => {
  return (
    <div className={'ChipList'}>
      {items.map((item, index) => (
        <Chip
          key={item.label + index}
          onRemove={onRemove}
          item={item}
        />
      ))}
    </div>
  );
};

ChipList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.any,
    })
  ),
  onRemove: PropTypes.func,
};


ChipList.defaultProps = {
  items: [],
};


export default ChipList;
