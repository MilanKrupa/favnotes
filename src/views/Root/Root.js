import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Card from 'components/molecules/Card/Card';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Card />
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
