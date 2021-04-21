import React from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'

//import routes from '../../config/routes'
import Login from '../pages/login/index'
import Register  from '../pages/register/index'
import Dashboard from '../pages/dashboard/index'
import useToken from './useToken';

/**
 * Dentro de setToken, guardamos el userToken como argumento para almacenarlo en la sesión
 * 'token'-> clave /cadena->2º argumento 
 * convertimos userToken de un objeto a un objeto JSON
 */
//  function setToken(userToken) {
//     sessionStorage.setItem('token', JSON.stringify(userToken));
// }

function Routes(){

    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route path="/public">
                        <PublicPage />
                    </Route> */}
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                </Switch>
            </Router>
            
        </div>
    );
}

const PrivateRoute = ({ children, ...rest }) => {
    //Establecemos valores de retorno para token y setToken
    const {token} = useToken();

    return (
      <Route
        {...rest}
        render={({ location }) =>
        token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  

export default Routes