import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout     from 'components/Layout/PrivateLayout/PrivateLayout';
import PublicationContainer from './PublicationContainer';


const PublicationRoutes = withPrivateLayout(({match}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={PublicationContainer}
    />
  </Switch>;
});

export default PublicationRoutes;
