
import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router';
import Login from '../pages/auth/login/Login.tsx';
import Home from '../pages/dashboard/home/Home.tsx';
import Signup from '../pages/auth/signup/Signup.tsx';
import Layout from '../components/layout/Layout.tsx';

const AppRoutes:React.FC = () => {
  return (
    <div>
        <Router>
            <Routes>
              <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route  path='/login' element={<Login/>}></Route>
                <Route  path='/signup' element={<Signup/>}></Route>
              </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default AppRoutes
