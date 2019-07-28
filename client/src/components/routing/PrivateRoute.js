import React, {useContext} from 'react';
import {route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({component: Component, ...rest}) => {
  const authContext = sueCotnext(AuthContext);
  const {isAuthenticated, loading}= authContext;
  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
      <Redirect to='/login'/>
    ) :  (
      <Component {...props} />
    )}/>
  )
}

export default PrivateRoute
