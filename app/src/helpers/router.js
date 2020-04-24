import {
  push,
  replace,
  goBack
} from 'connected-react-router';

// import {defaultLanguage} from 'configs/language';
// import {getCurrentLanguage} from 'helpers/translate';

import store              from 'store/store';


const url = path => {
  let newPath = '';
  // const language = getCurrentLanguage();

  // if (defaultLanguage === language || path.startsWith('/' + language + '/')) {
  //   newPath = '';
  // } else {
  //   newPath = '/' + language;
  // }

  newPath += path;
  return newPath;
};

const pushRoute = (path) => {
  store.dispatch(push(url(path)));
};

const replaceRoute = (path) => {
  store.dispatch(replace(url(path)));
};

const goBackRoute = () => {
  store.dispatch(goBack());
};

export {
  url,
  pushRoute,
  replaceRoute,
  goBackRoute,
};
