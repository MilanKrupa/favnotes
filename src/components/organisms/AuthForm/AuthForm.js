import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { routes } from 'routes/routes';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ErrorInline from 'components/atoms/ErrorInline/ErrorInline';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import WithContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const StyledInput = styled(Input)`
  margin-top: 20px;
  width: 350px;
`;

const StyledLink = styled.p`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.black};
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.notes};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 30px;
`;

const AuthForm = ({ userID, authenticate }) => {
  const { pathname } = window.location;
  const { register, login } = routes;
  function validateLogin(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length < 3) {
      error = 'At least 3 characters';
    }
    return error;
  }
  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,16}$/.test(value)) {
      error = 'Password should contain 8-16 characters, one number is required';
    }
    return error;
  }
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => authenticate(username, password)}
    >
      {() => (
        <StyledForm>
          <Heading>{userID}</Heading>
          <Heading>{pathname === login ? 'Sign in' : 'Sign up'}</Heading>
          <StyledInput
            as={Field}
            name="username"
            type="text"
            placeholder="login"
            autoComplete="off"
            validate={validateLogin}
          />
          <ErrorMessage name="username">{(msg) => <ErrorInline>{msg}</ErrorInline>}</ErrorMessage>
          <StyledInput
            as={Field}
            name="password"
            type="password"
            placeholder="password"
            validate={validatePassword}
          />
          <ErrorMessage name="password">{(msg) => <ErrorInline>{msg}</ErrorInline>}</ErrorMessage>
          <StyledButton type="submit">{pathname === login ? 'Log in' : 'Register'}</StyledButton>
          <StyledLink as={NavLink} to={pathname === login ? register : login}>
            {pathname === login ? 'Let me register' : 'Let me log in'}
          </StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
};

AuthForm.propTypes = {
  authenticate: PropTypes.func.isRequired,
  userID: PropTypes.string,
};

AuthForm.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ userID = null }) => ({
  userID,
});

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WithContext(AuthForm));
