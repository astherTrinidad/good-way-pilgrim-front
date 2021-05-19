import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

import appRoutes from '../../config/appRoutes';
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import MeProfile from '../pages/meProfile/index';
import MeProfileData from '../pages/meProfileData/index';
import MeEditProfile from '../pages/meEditProfile/index';
import MeLogros from '../pages/meLogros/index';
import Caminos from '../pages/caminos/index';
import CaminoActual from '../pages/caminoActual/index';

import FrequentQuestion from '../pages/frequentQuestion/index';
import PrivacyConsumers from '../pages/privacyConsumers/index';

import useToken from './useToken';

function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute path={appRoutes.login} component={Login} exact />
        <PublicRoute path={appRoutes.register} component={Register} exact />
        <PrivateRoute path={appRoutes.meProfile} component={MeProfile} exact />
        <PrivateRoute
          path={appRoutes.meProfileData}
          component={MeProfileData}
          exact
        />
        <PrivateRoute
          path={appRoutes.meEditProfile}
          component={MeEditProfile}
          exact
        />
        <PrivateRoute path={appRoutes.meLogros} component={MeLogros} exact />
        <PrivateRoute path={appRoutes.caminos} component={Caminos} exact />
        <PrivateRoute path={appRoutes.caminoActual} component={CaminoActual} exact />

        <PrivateRoute
          path={appRoutes.frequentQuestion}
          component={FrequentQuestion}
          exact
        />
        <PrivateRoute
          path={appRoutes.privacyConsumers}
          component={PrivacyConsumers}
          exact
        />
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  //Establecemos valores de retorno para token y setToken
  const { token } = useToken();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: appRoutes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ children, ...rest }) => {
  const { token } = useToken();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: appRoutes.meProfile,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Routes;
