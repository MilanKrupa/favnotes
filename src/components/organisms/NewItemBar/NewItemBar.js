import React from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form, Field } from 'formik';

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
  padding: 100px 90px;
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
  const { pageContext, isVisible, addItem } = props;
  return (
    <StyledWrapper activecolor={pageContext} isVisible={isVisible}>
      <Heading big as="h1">
        Create new {pageContext}
      </Heading>
      <Formik
        initialValues={{ title: '', content: '', twittName: '', articleUrl: '' }}
        onSubmit={(values, { setSubmitting }) => {
          addItem(pageContext, values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, values }) => (
          <StyledForm>
            <StyledInput as={Field} type="text" name="title" placeholder="title" />
            {pageContext === 'twitts' && (
              <StyledInput
                as={Field}
                type="text"
                name="twittName"
                placeholder="Account name eg. milan_krupa"
              />
            )}
            {pageContext === 'articles' && (
              <StyledInput placeholder="link" as={Field} type="text" name="articleUrl" />
            )}
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
  pageContext: PropTypes.oneOf(['notes', 'twitts', 'articles']),
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
