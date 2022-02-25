import {Fragment} from "react";
import {createGlobalStyle} from "styled-components";

function MyApp({Component, pageProps}) {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

const GlobalStyles = createGlobalStyle`
html,
body {
  margin: 0;
  overflow: hidden;
  height: 100%;
}
`;
