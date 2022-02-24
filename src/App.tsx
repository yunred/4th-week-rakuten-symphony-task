import React, { useEffect, useState } from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import * as C from 'constant';
import * as T from 'types';

function App() {
  const [LinkFileData, setListFileData] = useState<T.FetchDataType[]>([]); 
  
  useEffect(()=>{
    fetch(C.FETCHURL)
      .then(res=> res.json())
      .then(data => setListFileData(data));
  }, []);
  
 return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage LinkFileData={LinkFileData} />
        <DetailPage />
      </Container>
    </>
  );
}

export default App;
