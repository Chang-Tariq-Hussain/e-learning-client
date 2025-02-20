import React, { useEffect } from 'react'
import "./home.scss"
import { GetToken } from '../../../services/auth.service'
import { useNavigate } from 'react-router';
import Banner from '../banner/Banner';
import LanguageSlider from '../../../components/layout/language-slider/LanguageSlider';
import CourseCard from '../../../components/layout/course-card/CourseCard';
import { Col, Container, Row } from 'react-bootstrap';

const topCourses = [
  {
    "title": "Mastering JavaScript",
    "description": "A comprehensive guide to JavaScript, covering ES6+, asynchronous programming, and modern frameworks.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "url": "/courses/javascript",
    "rating": 4.8,
    "price": 49.99,
    "instructor": "John Doe",
    "duration": "12 hours",
    "level": "Intermediate",
    "language": "English",
    "studentsEnrolled": 15000
  },
  {
    "title": "Python for Beginners",
    "description": "Learn Python from scratch, including syntax, data structures, and basic algorithms.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    "url": "/courses/python",
    "rating": 4.7,
    "price": 39.99,
    "instructor": "Jane Smith",
    "duration": "10 hours",
    "level": "Beginner",
    "language": "English",
    "studentsEnrolled": 18000
  },
  {
    "title": "React.js Complete Guide",
    "description": "Build dynamic and interactive web applications using React.js with hooks, context API, and best practices.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "url": "/courses/react",
    "rating": 4.9,
    "price": 59.99,
    "instructor": "Michael Johnson",
    "duration": "15 hours",
    "level": "Advanced",
    "language": "English",
    "studentsEnrolled": 12000
  },
  {
    "title": "Node.js & Express.js",
    "description": "Learn to build scalable backend applications using Node.js and Express.js with REST APIs.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "url": "/courses/nodejs",
    "rating": 4.6,
    "price": 45.99,
    "instructor": "Emily White",
    "duration": "14 hours",
    "level": "Intermediate",
    "language": "English",
    "studentsEnrolled": 10000
  },
  {
    "title": "Express.js Fundamentals",
    "description": "Learn the fundamentals of Express.js to build robust and scalable backend applications with Node.js.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    "url": "/courses/express",
    "rating": 4.5,
    "price": 42.99,
    "instructor": "Daniel Roberts",
    "duration": "10 hours",
    "level": "Intermediate",
    "language": "English",
    "studentsEnrolled": 9000
  },
  {
    "title": "Next.js Complete Course",
    "description": "Master Next.js and build SEO-friendly, high-performance web applications with React and server-side rendering.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "url": "/courses/nextjs",
    "rating": 4.9,
    "price": 64.99,
    "instructor": "Sophia Martinez",
    "duration": "16 hours",
    "level": "Advanced",
    "language": "English",
    "studentsEnrolled": 11000
  }
]

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
      <Container>
        <Row>
          <Col>
            <h3 className='heading'>Top Courses</h3>
              <Row>
            <div className="top-courses-grid">
                {topCourses?.map(
                  (
                    { title, description, imageUrl, rating, price, instructor },
                    index
                  ) => {
                    return (
                      <Col>
                      <CourseCard
                        title={title}
                        key={index}
                        description={description}
                        imageUrl={imageUrl}
                        rating={rating}
                        price={price}
                        instructor={instructor}
                      />
                      </Col>
                    );
                  }
                )}
            </div>
              </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home

