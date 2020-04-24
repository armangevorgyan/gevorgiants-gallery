import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout  from 'components/Layout/PrivateLayout/PrivateLayout';
import AboutContainer     from 'components/containers/AboutContainer/AboutContainer';


const AboutRoutes = withPrivateLayout(({match}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={AboutContainer}
    />
  </Switch>;
});

export default AboutRoutes;
