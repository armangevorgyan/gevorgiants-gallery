import * as types from 'store/types';


const initialState = {
  banners: {
    isRequesting: false,
    bannersList: [],
    totalCount: 0,
  },
  categories: {
    isRequesting: false,
    categoriesList: [],
    totalCount: 0
  },
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.BANNERS_LIST_GET_REQUEST: {
      return {
        ...state,
        banners: {
          ...state.banners,
          isRequesting: true
        }
      };
    }
    case types.BANNERS_LIST_GET_SUCCESS: {
      return {
        ...state,
        banners: {
          ...state.banners,
          isRequesting: false,
          bannersList: action.bannersList,
          totalCount: action.totalCount
        }
      };
    }
    case types.BANNERS_LIST_GET_FAILURE: {
      return {
        ...state,
        banners: {
          ...state.banners,
          isRequesting: false,
          bannersList: [],
          totalCount: 0,
          errors: action.errors
        }
      };
    }
    case types.CATEGORIES_PREVIEW_LIST_GET_REQUEST: {
      return {
        ...state,
        categories: {
          ...state.categories,
          isRequesting: true
        }
      };
    }
    case types.CATEGORIES_PREVIEW_LIST_GET_SUCCESS: {
      return {
        ...state,
        categories: {
          ...state.categories,
          isRequesting: false,
          categoriesList: action.categoriesList,
          totalCount: action.totalCount
        }
      };
    }
    case types.CATEGORIES_PREVIEW_LIST_GET_FAILURE: {
      return {
        ...state,
        categories: {
          ...state.categories,
          isRequesting: false,
          categoriesList: [],
          totalCount: 0,
          errors: action.errors
        }

      };
    }
    case types.HOME_STORE_RESET: {
      return {
        ...state,
        banners: {
          isRequesting: false,
          bannersList: [],
          totalCount: 0,
        },
        categories: {
          isRequesting: false,
          categoriesList: [],
          totalCount: 0
        },
        errors: [],
      };
    }

    default:
      return state;
  }
}
