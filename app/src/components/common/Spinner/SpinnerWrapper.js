import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';
import Flex    from 'components/common/Flex/Flex';
import Text    from 'components/common/Text/Text';
import './SpinnerWrapper.scss';

class SpinnerWrapper extends React.Component {
  render() {
    const {
      className,
      children,
      spinning,
      progress,
      size,
      noLayout,
    } = this.props;

    const classNames = ['SpinnerWrapper', className];

    if (spinning) {
      classNames.push('spinning');
    }

    if (noLayout) {
      classNames.push('noLayout');
    }

    return (
      <div
        className={classNames.join(' ')}
      >
        {children}

        <Flex className={'SpinnerWrapper-overlay'}>
          <Flex column align={'center'} className={'SpinnerWrapper-Inner'}>
            <Spinner color={'primary'} size={size} />
            {progress && <Flex spaces={['mt-3']}>
              <Text
                color={'primary'}
                size={'scale-5'}
              >
                {progress}
              </Text>
            </Flex>}
          </Flex>
        </Flex>
      </div>
    );
  }
}

SpinnerWrapper.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.any.isRequired,
  spinning: PropTypes.bool,
  noLayout: PropTypes.bool,
  progress: PropTypes.any,
};

SpinnerWrapper.defaultProps = {
  className: '',
  spinning: false,
  noLayout: false,
  size: 100,
};

export default SpinnerWrapper;
