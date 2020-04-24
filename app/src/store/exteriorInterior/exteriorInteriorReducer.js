import * as types from 'store/types';


const initialState = {
  isRequesting: false,
  exteriorInteriorList: [],
  totalCount: 0,
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.EXTERIOR_INTERIOR_LIST_GET_REQUEST: {
      return {
        ...state,
        isRequesting: true
      };
    }
    case types.EXTERIOR_INTERIOR_LIST_GET_SUCCESS: {
      return {
        ...state,
        isRequesting: false,
        exteriorInteriorList: action.exteriorInteriorList,
        totalCount: action.totalCount
      };
    }
    case types.EXTERIOR_INTERIOR_LIST_GET_FAILURE: {
      return {
        ...state,
        isRequesting: false,
        exteriorInteriorList: [],
        totalCount: 0,
        errors: action.errors
      };
    }

    case types.EXTERIOR_INTERIOR_STORE_RESET: {
      return {
        ...state,
        isRequesting: false,
        exteriorInteriorList: [],
        totalCount: 0,
        errors: [],
      };
    }

    default:
      return state;
  }
}
