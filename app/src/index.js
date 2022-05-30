import React               from 'react';
import ReactDOM            from 'react-dom';
import { Provider }        from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ReactGA             from 'react-ga';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp }   from 'firebase/app';
import { getAnalytics }    from 'firebase/analytics';

import store, { history } from 'store/store';
import generalActions     from 'store/general/generalActions';
import ApiEventHandler    from 'helpers/apiEventHandler';

import { RootCenterLoader } from 'components/shared/PageCenterLoader/PageCenterLoader';

import 'index.scss';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqvEMUII1LyHhTjSPKBng1dzOtd8QLiCQ',
  authDomain: 'gevorgiants.firebaseapp.com',
  projectId: 'gevorgiants',
  storageBucket: 'gevorgiants.appspot.com',
  messagingSenderId: '487364418725',
  appId: '1:487364418725:web:357ba6efbd3a4dc9d0414c',
  measurementId: 'G-0QYJXJTSC4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics.app.automaticDataCollectionEnabled;
// console.log('App version: ' + (process.env.APP_VERSION || 'no_version'));
// console.log('Build environment: ' + process.env.ENV);

ReactGA.initialize('UA-164938368-1');
history.listen(location => {
  ReactGA.pageview(location.pathname);
});


// console.log('Configs environment: ' + CONFIG_ENV);

class Index extends React.Component {
  state = {
    isLoading: true,
    App: null
  };

  async componentDidMount() {
    try {
      (new ApiEventHandler()).listen();
      //await loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&libraries=places`);

      await store.dispatch(generalActions.initLanguage());

      await store.dispatch(generalActions.getTranslations());

      await store.dispatch(generalActions.getCountries());

      if (!['/not-found'].includes(location.pathname)) {
      }


      const { default: App } = await import('components/App.js');

      this.setState({
        App,
        isLoading: false
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      isLoading,
      App
    } = this.state;

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          { !isLoading && <App/> || <RootCenterLoader/> }
        </ConnectedRouter>
      </Provider>
    );
  }
}


ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
