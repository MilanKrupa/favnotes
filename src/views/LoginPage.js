import React from 'react';
import { Formik, Form, Field } from 'formik';
// import ErrorInline from 'components/atoms/ErrorInline/ErrorInline';
import AuthTemplate from 'templates/AuthTemplate';
import Button from 'components/atoms/Button/Button';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={() => null}>
        {() => (
          <Form>
            <Field name="username" type="email" />
            <Field name="password" type="password" />
            <Button type="submit">Zaloguj</Button>
          </Form>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default LoginPage;
