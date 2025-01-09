
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./header.scss"
import logoImage from '../../../assets/images/e-learning.avif'
const Header:React.FC = () => {
  return (
    <div className='header-container'>
        <Container>
            <Row>
                <Col>
                    <img src={logoImage} alt='E learning logo' className='logo-img'/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header