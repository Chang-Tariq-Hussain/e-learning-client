import React, { useEffect } from 'react'
import Header from './header/Header'
import { Outlet, useNavigate } from 'react-router'
import { GetToken } from '../../services/auth.service';

const Layout:React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = GetToken();

    if (token) {
        navigate('/dashboard');
    }
  }, [])
  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
