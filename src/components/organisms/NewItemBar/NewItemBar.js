import React from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import ErrorInline from 'components/atoms/ErrorInline/ErrorInline';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  height: 100vh;
  width: 680px;
  border-left: 8px solid ${({ theme, activecolor }) => theme[activecolor]};
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 80px 90px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  height: 30vh;
  margin: 30px 0 100px;
`;
const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = (props) => {
  const { pageContext, isVisible, addItem, handleClose } = props;
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    handleClose();
    addItem(pageContext, values);
    resetForm({ values: '' });
    setSubmitting(false);
  };

  function validateTitle(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (value.length < 3) {
      error = 'At least 3 characters';
    }
    return error;
  }
  function validateTwitt(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[a-zA-Z0-9_]{1,15}$/.test(value)) {
      error = 'Invalid twitter account';
    }

    return error;
  }
  function validateUrl(value) {
    let error;
    if (!value) {
      error = 'Required. You can use notes instead';
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
      error = 'Invalid URL';
    }
    return error;
  }
  return (
    <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
      <Heading big as="h1">
        Create new {pageContext}
      </Heading>
      <Formik
        initialValues={{ title: '', content: '', twitterName: '', articleUrl: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <StyledForm>
            <StyledInput
              as={Field}
              type="text"
              name="title"
              placeholder="title"
              autoComplete="off"
              validate={validateTitle}
            />

            <ErrorMessage name="title">{(msg) => <ErrorInline>{msg}</ErrorInline>}</ErrorMessage>
            {pageContext === 'twitters' && (
              <StyledInput
                as={Field}
                type="text"
                name="twitterName"
                autoComplete="off"
                placeholder="Account name eg. milan_krupa"
                validate={validateTwitt}
              />
            )}
            <ErrorMessage name="twitterName">
              {(msg) => <ErrorInline>{msg}</ErrorInline>}
            </ErrorMessage>
            {pageContext === 'articles' && (
              <StyledInput
                placeholder="link"
                as={Field}
                type="text"
                autoComplete="off"
                name="articleUrl"
                validate={validateUrl}
              />
            )}
            <ErrorMessage name="articleUrl">
              {(msg) => <ErrorInline>{msg}</ErrorInline>}
            </ErrorMessage>
            <StyledTextArea
              as="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="content"
              name="content"
              value={values.content}
            />
            <Button type="submit" disabled={isSubmitting} activecolor={pageContext}>
              Add {pageContext}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
