
import './home.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeButton from '../../../components/common/theme-button/ThemeButton.tsx'
import { Space } from 'antd'
import eLearnImage from '../../../assets/images/illustration-1.webp'
import { GetToken } from '../../../services/auth.service.ts'
import { useNavigate } from 'react-router'
const Home = () => {
  const token = GetToken();
  const navigate = useNavigate();
  
  if(token){
    navigate('/dashboard');
  }
  
  return (
    <div className='home-container'>
      <Container>
        <Row>
          <Col>
            <div className='content'>
              <div className='heading'>
                <Row>
                  <Col md={7}>
                <h3>Empowering Learners Everywhere: Transform Your Future, One Lesson at a Time.</h3>
                <p>Explore interactive courses, connect with expert instructors, and achieve your learning goals from the comfort of your home. Start your journey today to unlock limitless possibilities.</p>
                  </Col>
                  <Col md={5}>
                <img src={eLearnImage} alt="" className="e-learn-icon"/>
                  </Col>
                </Row>

              </div>
              <div className="home-btns">
                <Space>
                  <ThemeButton route='/signup' text="Signup" className="theme-btn theme-btn-primary"/>
                  <ThemeButton  route='/login' text="Login" className="theme-btn theme-btn-secondary"/>
                </Space>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home
