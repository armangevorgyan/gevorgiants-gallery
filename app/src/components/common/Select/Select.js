import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import './Select.scss';

const getSelectedOption = (v, options) => {
  let selectedOption = null;
  if (options.length) {
    selectedOption = options.find(o => o.value === v);
  }

  return selectedOption;
};

const Select = ({
                  disabled,
                  className,
                  fluid,
                  value,
                  defaultValue,
                  options,
                  onChange,
                  onBlur,
                  ...restProps
                }) => {
  const cn = `Select ${className} ${fluid ? 'fluid' : ''}`;
  const selectedValue = value || null;

  const mappedOptions = options.map(({label, value, disabled}) => ({label, value, isDisabled: disabled}));

  return (
    <ReactSelect
      {...restProps}
      value={getSelectedOption(selectedValue, options)}
      options={mappedOptions}
      className={cn}
      classNamePrefix="Select"
      isDisabled={disabled}
      onBlur={e => onBlur()}
      onChange={(option, action) => onChange(option.value, action)}
      menuPlacement={'auto'}
      maxMenuHeight={200}
    />
  );
};

Select.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  isMulti: PropTypes.bool,
  formatGroupLabel: PropTypes.object,
  closeMenuOnSelect: PropTypes.bool,
  styles: PropTypes.object,
  id: PropTypes.string,

  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Select.defaultProps = {
  className: '',
  fluid: false,
  disabled: false,
  isClearable: false,
  onChange: () => null
};

export default Select;
