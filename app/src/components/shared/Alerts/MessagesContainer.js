import React     from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MessageList from 'components/common/Message/MessageList';

import {removeMessage} from 'store/messages/messagesActions';


@connect(
  state => ({
    messages: state.messages.messages,
  }),
  dispatch => ({
    removeMessage: id => dispatch(removeMessage(id)),
  })
)
class MessagesContainer extends React.Component {
  static propTypes = {
    removeMessage: PropTypes.func,
    messages: PropTypes.array,
  };


  remove = id => {
    this.props.removeMessage(id);
  };


  render() {
    const {
      removeMessage,
      messages
    } = this.props;

    return (
      <MessageList
        removeMessage={removeMessage}
        messages={messages}
      />
    );
  }
}


export default MessagesContainer;
