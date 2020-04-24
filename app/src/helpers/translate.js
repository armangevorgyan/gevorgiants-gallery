import formatStringToComponent from 'helpers/componentParser';
import store                   from 'store/store';
import availableLanguages, {defaultLanguage}      from 'configs/language';

const getCurrentLanguage = () => store.getState().general.language;

const initCurrentLanguage = () => {
  const languageCode = location.pathname.substr(1).split('/')[0];
  return (languageCode && availableLanguages.includes(languageCode)) ? languageCode : defaultLanguage;
};

const changeCurrentLanguage = (newLanguage) => {
  const locationPathArray = location.pathname.substr(1).split('/');

  const languageFromUrl = locationPathArray[0];
  if (availableLanguages.includes(languageFromUrl)) {
    locationPathArray[0] = newLanguage;
  } else {
    locationPathArray.unshift(newLanguage);
  }

  if (newLanguage === defaultLanguage) {
    locationPathArray.shift();
  }

  const newUrl = '/' + locationPathArray.join('/') + location.search + location.hash;
  location.href = newUrl;
};

const makeTranslate = () => {
  return (string, data) => {
    if (!store) {
      return string;
    }
    const locales = store.getState().general.translations;
    let SplittedLocale;
    let locale;
    if(string && string.indexOf('.') !== -1) {
      SplittedLocale= string.split('.');
      locale = locales && locales[SplittedLocale[0]][SplittedLocale[1]] || string;
    } else locale = locales && locales[string] || string;
    return formatStringToComponent(locale, data);
  };
};

export {
  getCurrentLanguage,
  changeCurrentLanguage,
  initCurrentLanguage,
};

export default makeTranslate();
