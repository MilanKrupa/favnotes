import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <h1>root</h1>
      <Button width="220px">Close / Save</Button>
      <Button secondary>Remove</Button>
    </>
  );
};

export default Root;
