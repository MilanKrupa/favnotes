import React from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  border-left: 8px solid ${({ theme, activecolor }) => theme[activecolor]};
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 100px 90px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
`;

const StyledTextArea = styled(Input)`
  border-radius: 20px;
  height: 30vh;
  margin: 30px 0 100px;
`;

const NewItemBar = (props) => {
  const { pageContext } = props;
  return (
    <div>
      <StyledWrapper activecolor={pageContext}>
        <Heading big as="h1">
          Create new {pageContext}
        </Heading>
        <Input placeholder="title" />
        <StyledTextArea as="textarea" placeholder="content" />
        <Button activecolor={pageContext}>Add {pageContext}</Button>
      </StyledWrapper>
    </div>
  );
};

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitts', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default NewItemBar;
