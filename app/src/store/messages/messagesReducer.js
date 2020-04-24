import * as types from 'store/types';

const initialState = {
  messages: [],
  lastId: '1'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.MESSAGE_REMOVE:
      return {
        ...state,
        messages: state.messages.filter(m => m.id !== action.id)
      };
    case types.MESSAGE_REMOVE_BY_KEY:
      return {
        ...state,
        messages: state.messages.filter(m => m.key !== action.key)
      };
    case types.MESSAGE_ADD:
      return {
        ...state,
        messages: [...state.messages, {
          ...action.message,
          id: state.lastId
        }]
          .uniqBy('text'),
        lastId: +state.lastId + 1 + '',
      };
    default:
      return state;
  }
}
