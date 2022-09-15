// libraries
import React, { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
// api
import { useAppSelector } from '../hooks/redux';
import Login from '../pages/Login';

type PrivateRoutePropsType = {
  children: ReactElement;
};

const PrivateRoute: FC<PrivateRoutePropsType> = ({ children }) => {
  const { token } = useAppSelector(state => state.auth);

  if (!token) {
    // return <Navigate to="/login" replace />;
    return <Login />;
  }

  return children;
};

export default PrivateRoute;
