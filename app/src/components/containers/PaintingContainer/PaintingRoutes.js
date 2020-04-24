import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout from 'components/Layout/PrivateLayout/PrivateLayout';
import PaintingContainer from 'components/containers/PaintingContainer/PaintingContainer';


const PaintingRoutes = withPrivateLayout(({match}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={PaintingContainer}
    />
  </Switch>;
});

export default PaintingRoutes;
