import * as types from 'store/types';

import sleep           from 'helpers/sleep';
import PaintingService from 'services/PaintingService';


export default {
  getPaintingList,
  resetPaintingsStore
};

function getPaintingList(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.PAINTING_LIST_GET_REQUEST,
    });
    await sleep(1500);
    const {success, errors, response} = await PaintingService.getPaintingList();
    if (success) {
      dispatch({
        type: types.PAINTING_LIST_GET_SUCCESS,
        paintingsList: response.grid,
        totalCount: response.totalCount
      });
    } else {
      dispatch({
        type: types.PAINTING_LIST_GET_FAILURE,
        errors: errors
      });
      throw errors;
    }

    return true;
  };
}


function resetPaintingsStore() {
  return {
    type: types.PAINTING_STORE_RESET,
  };
}
