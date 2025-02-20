import React from 'react'
import TextInput from '../../../components/common/input-field/TextInput'
import { CiSearch } from 'react-icons/ci'
import './banner.scss';
import { Col, Container, Row } from 'react-bootstrap';

export default function Banner() {
  return (
    <div className='banner-container'>
        <Container fluid>
            <Row>
                <Col>
                <TextInput type="search" suffix={<CiSearch />} placeholder="Search here..." className='search-field'/>
                <h3 className='text-center'>Search for Best Courses Online</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
