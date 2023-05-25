import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./Spinner";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Spinner/>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
