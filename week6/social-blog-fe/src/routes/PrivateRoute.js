import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
};

export default PrivateRoute;
