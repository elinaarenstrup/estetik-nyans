import React from "react";
import styled from "styled-components";
import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Behandlingar } from "./behandlingar";
import { Priser } from "./priser";
import { OmMig } from "./om";
import { Kontakt } from "./kontakt";

const AppWrapper = styled.div`
  background-color: #fff;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Nav />
      <Header />
      <OmMig />
      <Behandlingar />
      <Priser />
      <Kontakt />
      <Footer />
    </AppWrapper>
  );
};
