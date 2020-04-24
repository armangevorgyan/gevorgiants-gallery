import React     from 'react';
import PropTypes from 'prop-types';
import Message   from './Message';

import './MessageList.scss';

import Flex from 'components/common/Flex/Flex';

import SwipeToDismiss from 'react-swipe-to-dismiss';


class MessageList extends React.Component {
  static propTypes = {
    removeMessage: PropTypes.func,
    messages: PropTypes.array,
  };


  remove = id => {
    this.props.removeMessage(id);
  };


  render() {
    const messages = this.props.messages.map(m => (
      <SwipeToDismiss
        key={m.id}
        onDismiss={() => this.remove(m.id)}
      >
        <Message
          {...m}
          remove={() => this.remove(m.id)}
        />
      </SwipeToDismiss>
    ));

    return (
      <Flex
        column
        xs={8}
        sm={6}
        md={5}
        lg={3}
        className="MessageList"
      >
        {messages}
      </Flex>
    );
  }
}


export default MessageList;
