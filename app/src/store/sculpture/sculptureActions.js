import * as types from 'store/types';

import SculptureService from 'services/SculptureService';

import sleep from 'helpers/sleep';


export default {
  getSculpturesList,
  resetSculptureStore
};

function getSculpturesList(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.SCULPTURES_LIST_GET_REQUEST,
    });
    await sleep(1500);
    const {success, errors, response} = await SculptureService.getSculpturesList();
    if (success) {
      dispatch({
        type: types.SCULPTURES_LIST_GET_SUCCESS,
        sculpturesList: response.grid,
        totalCount: response.totalCount
      });
    } else {
      dispatch({
        type: types.SCULPTURES_LIST_GET_FAILURE,
        errors: errors
      });
      throw errors;
    }

    return true;
  };
}


function resetSculptureStore() {
  return {
    type: types.SCULPTURES_STORE_RESET,
  };
}
