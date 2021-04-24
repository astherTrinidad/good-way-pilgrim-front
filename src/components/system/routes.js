import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

//import routes from '../../config/routes'
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import ShowProfile from '../pages/showProfile/index';
import MeProfile from '../pages/meProfile/index';
import EditProfile from '../pages/editProfile/index';
import FrequentQuestion from '../pages/frequentQuestion/index';
import PrivacyConsumers from '../pages/privacyConsumers/index';

import useToken from './useToken';

/**
 * Dentro de setToken, guardamos el userToken como argumento para almacenarlo en la sesión
 * 'token'-> clave /cadena->2º argumento
 * convertimos userToken de un objeto a un objeto JSON
 */
//  function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/public">
                        <PublicPage />
                    </Route> */}
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute path="/register">
            <Register />
          </PublicRoute>
          <PrivateRoute path="/meProfile">
            <MeProfile />
          </PrivateRoute>
          <PrivateRoute path="/showProfile">
            <ShowProfile />
          </PrivateRoute>
          <PrivateRoute path="/editProfile">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute path="/frequent-question">
            <FrequentQuestion />
          </PrivateRoute>
          <PrivateRoute path="/privacy-consumers">
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
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ children, ...rest }) => {
  //Establecemos valores de retorno para token y setToken
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
              pathname: '/showProfile',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Routes;
