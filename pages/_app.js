import {Fragment} from "react";
import styled from "styled-components";

function MyApp({Component, pageProps}) {
  return (
    <GlobalContainer>
      <Component {...pageProps} />
    </GlobalContainer>
  );
}

export default MyApp;

const GlobalContainer = styled(Fragment)`
  height: 100%;
`;
