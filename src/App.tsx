import { Fragment } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";

const Body = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 400;
`;

function App() {
  return (
    <Fragment>
      <Body className="App">Who's watching?</Body>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
