import React from 'react';
import AuthTemplate from 'templates/AuthTemplate';
import AuthForm from 'components/organisms/AuthForm/AuthForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default LoginPage;
