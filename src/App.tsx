import React, { useEffect, useState } from "react";
import Container from "components/Container";
import DetailPage from "pages/DetailPage";
import LinkPage from "pages/LinkPage";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import * as C from "constant";
import * as T from "types";
import { Data } from "MockData";

function App() {
  const [LinkFileData, setListFileData] = useState<T.FetchDataType[]>([]);
  useEffect(() => {
    fetch(C.FETCHURL)
      .then((res) => res.json())
      .then((data) => setListFileData(data));
  }, []);
  console.log(LinkFileData);

  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage />
        <DetailPage DetailData={Data} />
      </Container>
    </>
  );
}

export default App;
