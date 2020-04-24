import store                           from 'store/store';
import messagesActions, {messageTypes} from 'store/messages/messagesActions';

import authHelper  from 'helpers/authHelper';
import {pushRoute} from 'helpers/router';
import translate   from 'helpers/translate';

const eFailedToFetch = new CustomEvent('onFailedToFetch');
const eFailedToParse = new CustomEvent('onFailedToParse');
const e400s = new CustomEvent('on400s');
const e500s = new CustomEvent('on500s');
const eNotFound = new CustomEvent('onNotFound');
const eBeforeRequest = new CustomEvent('onBeforeRequest');
const eAfterRequest = new CustomEvent('onAfterRequest');

class ApiEventHandler {

  onFailedToFetch = () => {
    store.dispatch(messagesActions.addMessage({
      title: translate('ERRORS.ERROR'),
      text: translate('ERRORS.CONNECTION'),
      type: messageTypes.error
    }));

  };

  onFailedToParse = () => {
    store.dispatch(messagesActions.addMessage({
      title: translate('ERRORS.ERROR'),
      text: translate('ERRORS.SERVER'),
      type: messageTypes.error
    }));

  };

  on500s = () => {
    store.dispatch(messagesActions.addMessage({
      title: translate('ERRORS.ERROR'),
      text: translate('ERRORS.SERVER'),
      type: messageTypes.error
    }));
  };

  on400s = async () => {
    store.dispatch(messagesActions.addMessage({
      title: translate('ERRORS.ERROR'),
      text: translate('ERRORS.AUTH'),
      type: messageTypes.error
    }));
    authHelper.removeToken();
    pushRoute('/sign-in');
  };

  onNotFound = () => {
    pushRoute('/not-found', true);
  };

  onBeforeRequest = () => {
  };

  onAfterRequest = () => {
  };

  listen = () => {
    window.addEventListener('onFailedToFetch', this.onFailedToFetch);
    window.addEventListener('onFailedToParse', this.onFailedToParse);
    window.addEventListener('on400s', this.on400s);
    window.addEventListener('on500s', this.on500s);
    window.addEventListener('onNotFound', this.onNotFound);
    window.addEventListener('onBeforeRequest', this.onBeforeRequest);
    window.addEventListener('onAfterRequest', this.onAfterRequest);
  };
}

export default ApiEventHandler;
export {
  eFailedToFetch,
  eFailedToParse,
  e400s,
  e500s,
  eNotFound,
  eBeforeRequest,
  eAfterRequest,
};
