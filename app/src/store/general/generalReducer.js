import * as types         from 'store/types';
import {defaultLanguage} from 'configs/language';


const initialState = {
  language: defaultLanguage,
  translations: [],
  countries: [],
  isGlobalLoading: false,
  pageTitle: ''
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.SET_LANGUAGE: {
      return {
        ...state,
        language: action.language,
      };
    }

    case types.SET_TRANSLATIONS: {
      return {
        ...state,
        translations: action.translations,
      };
    }
    case types.SET_COUNTRIES: {
      return {
        ...state,
        countries: action.countries,
      };
    }

    case types.SET_GLOBAL_LOADING: {
      return {
        ...state,
        isGlobalLoading: action.isGlobalLoading || false,
      };
    }

    case types.SET_PAGE_TITLE: {
      return {
        ...state,
        pageTitle: action.pageTitle || ''
      };
    }

    default:
      return state;
  }
}
