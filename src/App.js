import React from "react";
import Routes from "./Routes/Route";
import { ContextAuth } from "./context/UserContext";
// import { Container } from './styles';

function App() {
  return (
    <>
      <ContextAuth>
        <Routes />
      </ContextAuth>
    </>
  );
}

export default App;
