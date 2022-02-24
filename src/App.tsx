import React from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import * as C from 'constant';

function App() {
  const LinkFileData = {};
  console.log(fetch(C.FETCHURL));
  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage />
        <DetailPage />
      </Container>
    </>
  );
}

export default App;
