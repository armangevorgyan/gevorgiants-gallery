import CountryService from 'services/CountryService';
import * as types     from 'store/types';
import moment         from 'moment';

import {initCurrentLanguage} from 'helpers/translate';
import TranslationService    from 'services/TranslationService';



export default {
  initLanguage,
  getTranslations,
  setGlobalLoading,
  getCountries,
  setPageTitle
};

function initLanguage() {
  return async (dispatch) => {

    const language = initCurrentLanguage();
    moment.locale(language);

    dispatch({
      type: types.SET_LANGUAGE,
      language: language
    });

    return true;
  };
}

function getTranslations() {
  return async (dispatch) => {

    const {success, errors, response} = await TranslationService.getAll();
    if (success) {
      dispatch({
        type: types.SET_TRANSLATIONS,
        translations: response
      });
    } else {
      throw errors;
    }

    return true;
  };
}

function getCountries() {
  return async (dispatch) => {

    const {success, errors, response} = await CountryService.getAll();
    if (success) {
      dispatch({
        type: types.SET_COUNTRIES,
        countries: response
      });
    } else {
      throw errors;
    }

    return true;
  };
}
function setGlobalLoading(isGlobalLoading) {
  return {
    type: types.SET_GLOBAL_LOADING,
    isGlobalLoading
  };
}

function setPageTitle(pageTitle) {
  return {
    type: types.SET_PAGE_TITLE,
    pageTitle
  };
}
