import translate                 from 'helpers/translate';
import isEqual                   from 'react-fast-compare';
import {history as StoreHistory} from 'store/store';

export let onBeforeUnloadStates = {
  changedFormNames: [],
  uploading: false,
};

export const resetBeforeUnloadFormNames = () => onBeforeUnloadStates = { ...onBeforeUnloadStates, changedFormNames: [] };
/*
*
*  Add block route change
* */
StoreHistory.block(() => {
  if ( onBeforeUnloadStates.changedFormNames?.length > 0 ) {
    return translate('UNSAVED_CHANGES_MODAL_TEXT');
  } else {
    return null;
  }
});

/*
*
*  Add route change listener and if needed unblock route change
* */
StoreHistory.listen(() => {
  if ( onBeforeUnloadStates.changedFormNames?.length > 0 ) {
    resetBeforeUnloadFormNames();
  }
});


window.onbeforeunload = (event) => {
  if ( onBeforeUnloadStates.changedFormNames?.length > 0 || onBeforeUnloadStates.uploading ) {
    event.preventDefault();
    return translate('UNSAVED_CHANGES_MODAL_TEXT');
  } else {
    return null;
  }
};

/*
*
* @description (originalData, newData, formName?)  =>  updating onBeforeUnloadStates
* */
export const detectFormChange = (originalData, newData, formName) => {
  if ( !isEqual(originalData, newData) ) {
    if ( formName && !onBeforeUnloadStates.changedFormNames?.includes(formName) ) {
      onBeforeUnloadStates.changedFormNames?.push(formName);
    }
  } else {
    if ( formName && onBeforeUnloadStates.changedFormNames.includes(formName) ) {
      onBeforeUnloadStates.changedFormNames?.splice(onBeforeUnloadStates.changedFormNames?.indexOf(formName), 1);
    }
  }
};

export const updateOnBeforeUnloadUpload = (uploading) => onBeforeUnloadStates.uploading = uploading;

export const updateOnBeforeUnloadChangedData = (changedFormNames) => {
  if ( Array.isArray(changedFormNames) ) {
    onBeforeUnloadStates = {
      ...onBeforeUnloadStates,
      changedFormNames: [...onBeforeUnloadStates, ...changedFormNames]
    };
  } else {
    onBeforeUnloadStates.changedFormNames?.push(changedFormNames);
  }
};

export const canPageUnloadDecorator = (wrapped) => {
  return function () {
    if ( onBeforeUnloadStates?.changedFormNames?.length ) {
      const confirmResult = confirm(translate('UNSAVED_CHANGES_MODAL_TEXT'));
      if ( confirmResult ) {
        resetBeforeUnloadFormNames();
        return wrapped.apply(this, arguments);
      }
    } else {
      return wrapped.apply(this, arguments);
    }
  };
};
export const unblockFormWrapper = (wrapped, formName) => {
  return function () {
    if ( formName && onBeforeUnloadStates.changedFormNames.includes(formName) ) {
      onBeforeUnloadStates.changedFormNames?.splice(onBeforeUnloadStates.changedFormNames?.indexOf(formName), 1);
    }
    return wrapped.apply(this, arguments);
  };
};

export default {
  detectFormChange,
  onBeforeUnloadStates,
  updateOnBeforeUnloadUpload,
  updateOnBeforeUnloadChangedData,
  canPageUnloadDecorator,
  unblockFormWrapper,
  resetBeforeUnloadFormNames,
};
