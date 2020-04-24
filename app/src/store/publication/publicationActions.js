import * as types from 'store/types';

import PublicationService from 'services/PublicationService';

import sleep from 'helpers/sleep';


export default {
  getPublicationsList,
  resetPublicationStore
};

function getPublicationsList(filter) {
  return async (dispatch) => {
    dispatch({
      type: types.PUBLICATION_LIST_GET_REQUEST,
    });
    await sleep(1500);
    const {success, errors, response} = await PublicationService.getPublicationsList();
    if (success) {
      dispatch({
        type: types.PUBLICATION_LIST_GET_SUCCESS,
        publicationsList: response.grid,
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


function resetPublicationStore() {
  return {
    type: types.PUBLICATION_STORE_RESET,
  };
}
