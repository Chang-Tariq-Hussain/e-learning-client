import React from "react";
import { Navigate } from "react-router";
import { GetToken } from "../services/auth.service";

interface PrivateRouteProps {
  children: React.ReactElement;
  roles?: string[];
  allowedRoles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  roles,
  allowedRoles,
}) => {
    const token = GetToken();
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.some((role) => roles?.includes(role))) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default PrivateRoute;
