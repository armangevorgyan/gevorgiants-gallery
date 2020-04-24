import * as types from 'store/types';


const initialState = {
  isRequesting: false,
  publicationsList: [],
  totalCount: 0,
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.PUBLICATION_LIST_GET_REQUEST: {
      return {
        ...state,
        isRequesting: true
      };
    }
    case types.PUBLICATION_LIST_GET_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        publicationsList: action.publicationsList,
        totalCount: action.totalCount
      };
    }
    case types.PAINTING_LIST_GET_FAILURE: {
      return {
        ...state,
        isRequesting: false,
        publicationsList: [],
        totalCount: 0,
        errors: action.errors
      };
    }

    case types.PUBLICATION_STORE_RESET: {
      return {
        ...state,
        isRequesting: false,
        publicationsList: [],
        totalCount: 0,
        errors: [],
      };
    }

    default:
      return state;
  }
}
