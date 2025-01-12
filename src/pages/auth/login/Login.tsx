import React from 'react';
import './login.scss';
import bgAuth from '../../../assets/images/auth-bg.webp';
import { Controller, useForm } from 'react-hook-form';
import { checkEmptySpaces, EmailValidation, maxLength, minLength, Required } from '../../../utils/patterns';
import TextInput from '../../../components/common/input-field/TextInput';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ThemeButton from '../../../components/common/theme-button/ThemeButton';
import { Link } from 'react-router';

const Login: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (values:any) => {
    console.log("values", values);
  }
  return (
    <div className="login-container">
      <Container fluid>
        <Row className="align-items-center h-100 ">
          {/* Image Column */}
          <Col md={8} className="d-none d-md-block h-100">
            <div className="image-container">
              <img src={bgAuth} alt="Authentication" className="bg-auth" />
            </div>
          </Col>

          {/* Form Column */}
          <Col md={4} className="form-container">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="justify-content-center">
                <Col lg={10}>
                  <h3 className="padding-layout">Login</h3>
                </Col>
                <Col lg={10}>
                  <div className="form-field">
                    <Controller
                      name="email"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: checkEmptySpaces,
                        required: Required,
                        maxLength: maxLength(50),
                        pattern: EmailValidation
                      }}
                      render={({ field: { name, ...field } }) => (
                        <TextInput
                          placeholder="Enter your email"
                          label="Email"
                          type="text"
                          field={field}
                          errors={errors.email}
                          className="required"
                        />
                      )}
                    />
                  </div>
                </Col>
                <Col lg={10}>
                  <div className="form-field">
                    <Controller
                      name="password"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: checkEmptySpaces,
                        required: Required,
                        minLength: minLength(4),
                        maxLength: maxLength(50),
                      }}
                      render={({ field: { name, ...field } }) => (
                        <TextInput
                          placeholder="Enter your password"
                          label="Password"
                          type="password"
                          field={field}
                          errors={errors.password}
                          className="required"
                        />
                      )}
                    />
                  </div>
                </Col>
                <Col lg={10}>
                  <ThemeButton
                    text="Login"
                    className="btn-light-lg"
                    type="submit"
                  />
                </Col>
                <Col lg={10}>
                  <small>Don't have an account? <span><Link to='/signup'>Signup</Link></span></small>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
