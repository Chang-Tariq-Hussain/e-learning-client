import React from 'react';
import './signup.scss';
import bgAuth from '../../../assets/images/auth-bg.webp';
import { Controller, useForm } from 'react-hook-form';
import { checkEmptySpaces, EmailValidation, maxLength, minLength, PasswordValidation, Required } from '../../../utils/patterns';
import TextInput from '../../../components/common/input-field/TextInput';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ThemeButton from '../../../components/common/theme-button/ThemeButton';
import { Divider } from 'antd';
import SelectField from '../../../components/common/select-field/SelectField';
import { roles } from '../../../utils/constants';
import { Link, useNavigate } from 'react-router';
import { useMutation } from 'react-query';
import { SignupService } from '../../../services/auth.service';
import { useDispatch } from 'react-redux';
import { setIsLogin, setRole, setToken, setUser } from '../../../redux/features/authSlice';

const Signup: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupMutation = useMutation(SignupService);

  const onSubmit = async(values:any) => {
    try {
      const data = await signupMutation.mutateAsync(values);
      if(data.success){
        dispatch(setUser(data?.data?.user))
        dispatch(setToken(data?.token))
        dispatch(setIsLogin(true))
        dispatch(setRole(data?.data?.user?.role))
      }

      navigate('/dashboard');
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const options = [
    {
      value: roles.student,
      label: 'Student'
    },
    {
      value: roles.instructor,
      label: 'Instructor'
    },
    {
      value: roles.admin,
      label: 'Admin'
    }
  ]
  return (
    <div className="signup-container">
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
                  <h3 className="padding-layout">Signup</h3>
                </Col>
                <Col lg={10}>
                  <div className="form-field">
                    <Controller
                      name="name"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: checkEmptySpaces,
                        required: Required,
                        maxLength: maxLength(50),
                      }}
                      render={({ field: { name, ...field } }) => (
                        <TextInput
                          placeholder="Enter your name"
                          label="Name"
                          type="text"
                          field={field}
                          errors={errors.name}
                          className="required"
                        />
                      )}
                    />
                  </div>
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
                        pattern: PasswordValidation,
                        required: Required,
                        minLength: minLength(8),
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
                <Divider style={{margin:"15px 0"}}/>
                <Col lg={10}>
                  <div className="form-field">
                    <Controller
                      name="role"
                      defaultValue=""
                      control={control}
                      rules={{
                        required: Required,
                      }}
                      render={({ field: { name, ...field } }) => (
                        <SelectField
                          label="Role"
                          className="role-select required"
                          options={options}
                          fieldName="role"
                          setValue={setValue}
                          errors={errors.role}
                          allowClear
                          showSearch
                          placeholder="Select a role"
                          clearErrors={clearErrors}
                        />
                      )}
                    />
                  </div>
                </Col>
                
                <Col lg={10}>
                  <ThemeButton
                    text="Signup"
                    className="btn-light-lg"
                    type="submit"
                  />
                </Col>
                <Col lg={10}>
                  <small>Already have an account? <span><Link to='/login'>Login</Link></span></small>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
