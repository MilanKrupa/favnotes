import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>root</h1>
          <Button width="220px">Close / Save</Button>
          <Button secondary>Remove</Button>
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
