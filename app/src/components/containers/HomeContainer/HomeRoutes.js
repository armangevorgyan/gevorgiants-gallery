import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout from 'components/Layout/PrivateLayout/PrivateLayout';
import HomeContainer     from 'components/containers/HomeContainer/HomeContainer';
import Redirect          from 'components/common/Redirect/Redirect';


const HomeRoutes = withPrivateLayout(({match, breakpoint, contentHeight,}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={() => <HomeContainer breakpoint={breakpoint} contentHeight={contentHeight}/>}
    />
    <Redirect
      to={{pathname: '/not-found'}}
    />
  </Switch>;
});

export default HomeRoutes;
