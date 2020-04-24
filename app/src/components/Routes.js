import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import {url} from 'helpers/router';

import Redirect from 'components/common/Redirect/Redirect';

import HomeRoutes                from 'components/containers/HomeContainer/HomeRoutes';
import AboutRoutes               from 'components/containers/AboutContainer/AboutRoutes';
import PublicationRoutes         from 'components/containers/PublicationContainer/PublicationRoutes';
import ExteriorInteriorContainer from 'components/containers/ExteriorInteriorContainer/ExteriorInteriorRoutes';
import PaintingRoutes            from 'components/containers/PaintingContainer/PaintingRoutes';
import SculptureRoutes           from 'components/containers/SculptureContainer/SculptureRoutes';
import Page404                   from 'components/shared/ErrorPages/Page404';


class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route
          path={url('/home')}
          component={HomeRoutes}
        />
        <Route
          path={url('/sculptures')}
          component={SculptureRoutes}
        />
        <Route
          path={url('/paintings')}
          component={PaintingRoutes}
        />
        <Route
          path={url('/exteriors-interiors')}
          component={ExteriorInteriorContainer}
        />
        <Route
          path={url('/publications')}
          component={PublicationRoutes}
        />
        <Route
          path={url('/about')}
          component={AboutRoutes}
        />
        <Route
          path={'/not-found'}
          component={Page404}
        />
        <Redirect
          exact
          from={'/'}
          to={{pathname: url('/home')}}
        />
        <Route
          component={Page404}
        />
      </Switch>
    );
  }
}


export default Routes;
