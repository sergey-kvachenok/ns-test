// libraries
import React, { FC, ReactElement } from 'react';
// api
import { useAppSelector } from '../hooks/redux';
import Login from '../pages/Login';

type PrivateRoutePropsType = {
  children: ReactElement;
};

const PrivateRoute: FC<PrivateRoutePropsType> = ({ children }) => {
  const { token } = useAppSelector(state => state.auth);

  if (!token) {
    return <Login />;
  }

  return children;
};

export default PrivateRoute;
