import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Stack, Typography } from '@mui/material';
import AuthenticationAPI from 'app/api/authentication.api';
import logo from 'app/assets/images/logo.png';
import { useAppDispatch } from 'app/services/redux/hooks';
import { login } from 'app/services/redux/slices/user-slice';
import StorageService from 'app/services/storage/index';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from 'reactstrap';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import { ACCESS_TOKEN, Role } from 'shared/const/user.const';
import 'styles/velzon-template/app.scss';
import * as Yup from 'yup';
import ParticlesAuth from '../components/particles-auth.component.jsx';

function Login() {
  const [showPassword, handleShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Vui lòng nhập Email'),
      password: Yup.string().required('Vui lòng nhập Mật khẩu'),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const result = await AuthenticationAPI.login(
          values.email,
          values.password
        );
        if (result) {
          StorageService.set(ACCESS_TOKEN, result.accessToken);
          dispatch(
            login({
              info: { ...result.user },
            })
          );
          navigate(result.user.role === Role.ADMIN ? '/admin' : '/profile');
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
  });

  const handleChangeShowPassword = () => {
    handleShowPassword((isShow) => !isShow);
  };

  return (
    <>
      <LoadingComponent open={loading} />

      <Helmet>
        <title>Login Page</title>
      </Helmet>

      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={logo} alt="" width={150} height={75} />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">
                        Sign in to continue to OnConnect
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          formik.handleSubmit();
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email || ''}
                            invalid={
                              !!(formik.touched.email && formik.errors.email)
                            }
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <FormFeedback type="invalid">
                              {formik.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                              name="password"
                              value={formik.values.password || ''}
                              type={showPassword ? 'text' : 'password'}
                              className="form-control pe-5"
                              placeholder="Enter Password"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              invalid={
                                !!(
                                  formik.touched.password &&
                                  formik.errors.password
                                )
                              }
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <FormFeedback type="invalid">
                                {formik.errors.password}
                              </FormFeedback>
                            ) : (
                              <button
                                className="btn btn-link position-absolute end-0 
                                  top-0 text-decoration-none text-muted shadow-none"
                                type="button"
                                id="password-addon"
                                onClick={handleChangeShowPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOffIcon sx={{ fontSize: 16 }} />
                                ) : (
                                  <VisibilityIcon sx={{ fontSize: 16 }} />
                                )}
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="mt--MS">
                          <Button
                            color="success"
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            Sign In
                          </Button>
                        </div>

                        <Stack
                          direction="row"
                          className="mt--S"
                          justifyContent="center"
                          alignItems="center"
                          spacing={0.5}
                        >
                          <Typography>Don&apos;t have account?</Typography>
                          <Link
                            to="/register-free"
                            className="custom-link font--16"
                          >
                            Sign Up
                          </Link>
                        </Stack>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </>
  );
}

export default Login;
