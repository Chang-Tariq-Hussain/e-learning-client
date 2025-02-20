import React from 'react'
import Banner from '../banner/Banner'
import LanguageSlider from '../../../components/layout/language-slider/LanguageSlider'
import { Col, Container, Row } from 'react-bootstrap';
import CoursesGrid from '../../../components/layout/courses-grid/CoursesGrid';

export interface CoursesProps{
    heading: string
}
export default function Courses({heading}:CoursesProps) {
  return (
    <div className='courses-container'>
        <Container>
            <Row>
                <Col>
                    <h3 className='heading'>{heading}</h3>
                    <CoursesGrid/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
