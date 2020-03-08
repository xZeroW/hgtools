import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

import { authenticationService } from '_services/auth.service';
import { config } from 'config';


export default class Register extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
      // eslint-disable-next-line react/prop-types
      this.props.history.push('/');
    }

    document.body.classList.add('bg-gradient-primary');
  }
  render(){
    return (
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <Formik
                    initialValues={{
                      email: '',
                      username: '',
                      password: '',
                      confirmPassword: ''
                    }}
                    validationSchema={Yup.object().shape({
                      username: Yup.string().required('Username is required'),
                      password: Yup.string().required('Password is required'),
                      email: Yup.string().email().required('Email is required'),
                      confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm your Password')
                    })}
                    onSubmit={({ username, email, password }, { setStatus, setSubmitting, resetForm, setFieldError }) => {
                      setStatus();
                      Axios.post( config.API_URL + '/users', { username, email, password })
                        .then(
                          res => {
                            if (res.status === 201){
                              setSubmitting(false);
                              resetForm();
                              setStatus('Account created! You can now');
                            }
                          },
                          () => {
                            setSubmitting(false);
                            setFieldError('username', 'User already exists');
                          }
                        );
                    }}>
                    {({ errors, status, touched, isSubmitting }) => (
                      <Form className="user">
                        <div className="form-group">
                          <Field name="username" type="text" className={'form-control form-control-user' + (errors.username && touched.username ? ' is-invalid' : '')} placeholder="Username" />
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <Field name="email" type="email" className={'form-control form-control-user' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Email" />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <Field name="password" type="password" className={'form-control form-control-user' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <Field name="confirmPassword" type="password" className={'form-control form-control-user' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} placeholder="Confirm Password" />
                          <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isSubmitting}>Sign up</button>
                          {isSubmitting &&
                              <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          }
                        </div>
                        {status &&
                            <div className={'alert alert-success'}>{status} <Link to='/login'>Login</Link></div>
                        }
                      </Form>
                    )}
                  </Formik>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="text-center">
                    <Link className="small" to="/login">Already have an account? Login!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}