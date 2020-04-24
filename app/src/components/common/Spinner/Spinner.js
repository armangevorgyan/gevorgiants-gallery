import React        from 'react';
import ReactSpinkit from 'react-spinkit';
import PropTypes    from 'prop-types';

import Flex   from 'components/common/Flex/Flex';
import './Spinner.scss';
import Colors from 'styles/colors.scss';


class Spinner extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    name: PropTypes.oneOf(['circle', 'cube-grid', 'folding-cube']),
  };


  static defaultProps = {
    size: 20,
    color: 'yellow-500',
    name: 'folding-cube',
  };


  render() {
    const {
      name,
      color,
      size,
    } = this.props;

    const classNames = ['Spinner'];

    classNames.push('size-' + size + 'px');

    return (
      <Flex
        width={size}
        height={size}
      >
        <ReactSpinkit
          name={name}
          className={classNames.join(' ')}
          color={Colors[color] || color}
          fadeIn={'none'}
        />
      </Flex>
    );
  }
}


export default Spinner;
