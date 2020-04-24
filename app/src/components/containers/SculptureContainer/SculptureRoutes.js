import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout  from 'components/Layout/PrivateLayout/PrivateLayout';
import SculptureContainer from 'components/containers/SculptureContainer/SculptureContainer';


const SculptureRoutes = withPrivateLayout(({match}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={SculptureContainer}
    />
  </Switch>;
});

export default SculptureRoutes;
