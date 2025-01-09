import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './header/Header'
import { Outlet } from 'react-router'

const Layout:React.FC = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
