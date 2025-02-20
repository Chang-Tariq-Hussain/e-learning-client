import React, { useEffect } from 'react'
import "./home.scss"
import { GetToken } from '../../../services/auth.service'
import { useNavigate } from 'react-router';
import Banner from '../banner/Banner';
import LanguageSlider from '../../../components/layout/language-slider/LanguageSlider';
import Courses from '../courses/Courses';


const Home:React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = GetToken();
    if(!token){
      navigate('/login')
    }
  }, [])
  return (
    <div className='home-container'>
      <Banner />
      <LanguageSlider />
      <Courses heading={'Populer Courses'}/>
    </div>
  );
}

export default Home

