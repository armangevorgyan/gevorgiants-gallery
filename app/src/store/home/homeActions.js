import * as types from 'store/types';

import HomeService from 'services/HomeService';
import sleep       from 'helpers/sleep';


export default {
  getCategoriesPreviews,
  getBannersList,
  resetHomeStore
};

function getBannersList(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.BANNERS_LIST_GET_REQUEST,
    });
    await sleep(1000);
    const {success, errors, response} = await HomeService.getBannersList();
    if (success) {
      dispatch({
        type: types.BANNERS_LIST_GET_SUCCESS,
        bannersList: response.grid,
        totalCount: response.totalCount
      });
    } else {
      dispatch({
        type: types.BANNERS_LIST_GET_FAILURE,
        errors: errors
      });
      throw errors;
    }

    return true;
  };
}

function getCategoriesPreviews(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.CATEGORIES_PREVIEW_LIST_GET_REQUEST,
    });
    await sleep(1000);
    const {success, errors, response} = await HomeService.getCategoriesPreviews();
    if (success) {
      dispatch({
        type: types.CATEGORIES_PREVIEW_LIST_GET_SUCCESS,
        categoriesList: response.grid,
        totalCount: response.totalCount
      });
    } else {
      dispatch({
        type: types.CATEGORIES_PREVIEW_LIST_GET_FAILURE,
        errors: errors
      });
      throw errors;
    }

    return true;
  };
}

function resetHomeStore() {
  return {
    type: types.HOME_STORE_RESET,
  };
}
