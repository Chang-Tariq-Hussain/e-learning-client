
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./header.scss"
import logoImage from '../../../assets/images/e-learning.avif'
import { useNavigate } from 'react-router'
const Header:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='header-container'>
        <Container>
            <Row>
                <Col>
                    <img src={logoImage} alt='E learning logo' className='logo-img' onClick={() => navigate('/')}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header