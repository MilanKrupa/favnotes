import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes/routes';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ErrorInline from 'components/atoms/ErrorInline/ErrorInline';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import WithContext from 'hoc/withContext';

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

const AuthForm = () => {
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
    } else if (!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(value)) {
      error = 'At least 6 characters, one number and one special character required';
    }
    return error;
  }
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={() => null}>
      {() => (
        <StyledForm>
          <Heading>{pathname === login ? 'Sign in' : 'Sign up'}</Heading>
          <StyledInput
            as={Field}
            name="username"
            type="text"
            placeholder="login"
            autocomplete="off"
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
          <StyledButton type="submit">Zaloguj</StyledButton>
          <StyledLink as={NavLink} to={pathname === login ? register : login}>
            {pathname === login ? 'Let me register' : 'Let me log in'}
          </StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
};

export default WithContext(AuthForm);
