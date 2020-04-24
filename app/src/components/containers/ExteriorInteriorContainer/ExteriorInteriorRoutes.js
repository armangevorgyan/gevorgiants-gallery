import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import withPrivateLayout from 'components/Layout/PrivateLayout/PrivateLayout';
import ExteriorInteriorContainer   from './ExteriorInteriorContainer';


const ExteriorInteriorRoute = withPrivateLayout(({match}) => {
  return <Switch>
    <Route
      exact
      path={`${match.path}`}
      component={ExteriorInteriorContainer}
    />
  </Switch>;
});

export default ExteriorInteriorRoute;
