import React     from 'react';
import {connect} from 'react-redux';
import {hot}     from 'react-hot-loader/root';

import Routes             from 'components/Routes';
import MessagesContainer  from 'components/shared/Alerts/MessagesContainer';
import {RootCenterLoader} from 'components/shared/PageCenterLoader/PageCenterLoader';

import './App.scss';


const App = connect(state => ({
  isGlobalLoading: state.general.isGlobalLoading,
}))(
  ({isGlobalLoading}) => {
    if (isGlobalLoading) {
      return <RootCenterLoader />;
    }
    return <div className={'App'}>
      <MessagesContainer />
      <Routes />
    </div>;
  }
);

export default module?.hot ? hot(App) : App;
