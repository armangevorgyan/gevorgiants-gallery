import React     from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/common/Flex/Flex';
import Icon from 'components/common/Icon/Icon';
import Text from 'components/common/Text/Text';

import messageTypes from 'configs/messageTypes';


import Colors from 'styles/colors.scss';
import './Message.scss';


const colors = {
  success: Colors['success'],
  error: Colors['error'],
  info: Colors['warning'],
};

export default class Message extends React.Component {
  static propTypes = {
    remove: PropTypes.func,

    type: PropTypes.string,
    text: PropTypes.node,
    title: PropTypes.node,
    timeOut: PropTypes.number
  };

  static defaultProps = {
    type: messageTypes.success,
    timeOut: 5000
  };

  constructor(props) {
    super(props);

    this.timeout = null;
  }

  componentDidMount() {
    const {
      autoRemove,
      timeOut
    } = this.props;

    if ( autoRemove !== false ) {
      this.timeout = setTimeout(() => this.remove(), timeOut);
    }
  }

  remove = () => {
    this.props.remove();
    clearTimeout(this.timeout);
  };

  getIconName = () => {
    const { type } = this.props;

    switch (type) {
      case messageTypes.error: {
        return 'error';
      }
      case messageTypes.info: {
        return 'info';
      }
      case messageTypes.success: {
        return 'notification-check';
      }
      default: {
        return 'info';
      }
    }
  };

  render() {
    const {
      text,
      title,
      type,
      rightRender,
      className,
      ...restProps
    } = this.props;

    const classNames = [className, 'Message ' + type];

    return (
      <Flex
        {...restProps}
        width={'100%'}
        spaces={['mt-4', 'pl-6', 'pr-3', 'pt-4', 'pb-4']}
        className={classNames.join(' ')}
        row
        justify={'space-between'}
        align={'center'}
      >
        <Flex
          className={'Message-inner'}
          align={'center'}
        >
          <Flex spaces={['mr-6']}>
            <Icon size={24} color={colors[type]} icon={this.getIconName()} />
          </Flex>
          <Flex column testId={`${type}-notification`}>
            <Text className={'title'} color={'neutral-500'} size={'scale-7'} testId={type+'-notification-title'}>{title}</Text>
            <Text color={'neutral-900'} testId={type+'-notification-description'}>{text}</Text>
          </Flex>
        </Flex>

        {rightRender ? (
          <Flex>
            {rightRender({ title, text, type })}
          </Flex>
        ) : null}

        <Flex className={'close-button-wrapper'} onClick={this.remove}>
          <Icon size={24} color={'neutral-200'} icon={'close'} />
        </Flex>
      </Flex>
    );
  }
}
