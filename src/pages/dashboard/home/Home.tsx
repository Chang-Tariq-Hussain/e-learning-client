import React, { useEffect } from 'react'
import "./home.scss"
import { GetToken } from '../../../services/auth.service'
import { useNavigate } from 'react-router';
const Home:React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = GetToken();
    if(!token){
      navigate('/login')
    }
  }, [])
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  )
}

export default Home

