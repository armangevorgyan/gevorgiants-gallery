import * as types from 'store/types';
import messageTypes from 'configs/messageTypes';

export default {
  removeMessage,
  removeMessageByKey,
  addMessage,
  messageTypes,
};
export {
  messageTypes,
};

export function removeMessage(id) {
  return (dispatch, getState) => {
    const message = getState().messages.messages.find(it => it.id === id);

    if (message.onRemove) {
      message.onRemove();
    }

    dispatch({
      type: types.MESSAGE_REMOVE,
      id
    });
  };
}

export function removeMessageByKey(key) {
  return {
    type: types.MESSAGE_REMOVE_BY_KEY,
    key
  };
}

export function addMessage(message) {
  return {
    type: types.MESSAGE_ADD,
    message
  };
}