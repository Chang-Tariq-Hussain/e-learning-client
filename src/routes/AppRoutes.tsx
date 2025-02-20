// AppRoutes.tsx
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router";
import PrivateRoute from "./PrivateRoute";
// import { routes } from "./routes";
import Layout from "../components/layout/Layout";
import Login from '../pages/auth/login/Login'
import Signup from '../pages/auth/signup/Signup'
import LandingPage from "../pages/dashboard/landing-page/LandingPage";
import Home from "../pages/dashboard/home/Home";
import { useSelector } from "react-redux";
import CoursesPage from "../pages/dashboard/courses-page/CoursesPage";

export const routes = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ],
  private: [
    { path: "/dashboard", element: <Home />, roles: ["user", "admin"] },
    { path: "/courses", element: <CoursesPage />, roles: ["user", "admin"] },
  ],
};
// Example user state (replace with actual auth logic)
const userRoles = ["user"]; // Replace with actual user roles

const AppRoutes: React.FC = () => {
  const {token} = useSelector((state: any) => state?.auth)
  const isAuthenticated = token ? true : false
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout/>}>
          {routes.public.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        

        {/* Private Routes */}
        <Route element={<Layout />}>
          {routes.private.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute
                  roles={userRoles}
                  allowedRoles={route?.roles}
                  isAuthenticated={isAuthenticated}
                >
                  {route.element}
                </PrivateRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
