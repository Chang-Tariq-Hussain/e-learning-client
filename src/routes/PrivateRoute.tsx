import React from "react";
import { Navigate } from "react-router";
import { GetToken } from "../services/auth.service";

interface PrivateRouteProps {
  children: React.ReactElement;
  roles?: string[];
  allowedRoles?: string[];
  isAuthenticated?:boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roles,
  allowedRoles,
  isAuthenticated
}) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.some((role) => roles?.includes(role))) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default PrivateRoute;
