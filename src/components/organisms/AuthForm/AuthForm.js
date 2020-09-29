import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes/routes';
import { NavLink } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import { Formik, Form, Field } from 'formik';
// import ErrorInline from 'components/atoms/ErrorInline/ErrorInline';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import WithContext from 'hoc/withContext';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledInput = styled(Input)`
  margin-bottom: 30px;
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
`;

const AuthForm = () => {
  const { pathname } = window.location;
  const { register, login } = routes;
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
          />
          <StyledInput as={Field} name="password" type="password" placeholder="password" />
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
