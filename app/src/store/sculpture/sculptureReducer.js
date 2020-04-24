import * as types from 'store/types';


const initialState = {
  isRequesting: false,
  sculpturesList: [],
  totalCount: 0,
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.SCULPTURES_LIST_GET_REQUEST: {
      return {
        ...state,
        isRequesting: true
      };
    }
    case types.SCULPTURES_LIST_GET_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        sculpturesList: action.sculpturesList,
        totalCount: action.totalCount
      };
    }
    case types.SCULPTURES_LIST_GET_FAILURE: {
      return {
        ...state,
        isRequesting: false,
        sculpturesList: [],
        totalCount: 0,
        errors: action.errors
      };
    }

    case types.SCULPTURES_STORE_RESET: {
      return {
        ...state,
        isRequesting: false,
        sculpturesList: [],
        totalCount: 0,
        errors: [],
      };
    }

    default:
      return state;
  }
}
