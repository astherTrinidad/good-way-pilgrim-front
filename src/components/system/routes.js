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
import UserProfile from '../pages/userProfile/index';
import MeProfile from '../pages/meProfile/index';
import MeEditProfile from '../pages/meEditProfile/index';
import FrequentQuestion from '../pages/frequentQuestion/index';
import PrivacyConsumers from '../pages/privacyConsumers/index';

import useToken from './useToken';

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <PublicRoute path={appRoutes.login}>
            <Login />
          </PublicRoute>
          <PublicRoute path={appRoutes.register}>
            <Register />
          </PublicRoute>
          <PrivateRoute path={appRoutes.meProfile}>
            <MeProfile />
          </PrivateRoute>
          <PrivateRoute path={appRoutes.meEditProfile}>
            <MeEditProfile />
          </PrivateRoute>
          <PrivateRoute path={appRoutes.userProfile}>
            <UserProfile />
          </PrivateRoute>
          <PrivateRoute path={appRoutes.frequentQuestion}>
            <FrequentQuestion />
          </PrivateRoute>
          <PrivateRoute path={appRoutes.privacyConsumers}>
            <PrivacyConsumers />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
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
