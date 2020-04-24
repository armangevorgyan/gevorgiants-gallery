import * as types from 'store/types';

import ExteriorInteriorService from 'services/ExteriorInteriorService';

import sleep from 'helpers/sleep';


export default {
  getExteriorsInteriorsList,
  resetExteriorsInteriorsStore
};

function getExteriorsInteriorsList(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.EXTERIOR_INTERIOR_LIST_GET_REQUEST,
    });
    await sleep(1500);
    const {success, errors, response} = await ExteriorInteriorService.getExteriorsInteriorsList();
    if (success) {
      dispatch({
        type: types.EXTERIOR_INTERIOR_LIST_GET_SUCCESS,
        exteriorInteriorList: response.grid,
        totalCount: response.totalCount
      });
    } else {
      dispatch({
        type: types.EXTERIOR_INTERIOR_LIST_GET_FAILURE,
        errors: errors
      });
      throw errors;
    }

    return true;
  };
}


function resetExteriorsInteriorsStore() {
  return {
    type: types.EXTERIOR_INTERIOR_STORE_RESET,
  };
}
