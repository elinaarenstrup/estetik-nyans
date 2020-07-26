import React from "react";
import styled from "styled-components/macro";
import { RoundCard } from "./components/roundCard";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const Behandlingar = (roundImgUrl, title, secondaryText) => {
  return (
    <Wrapper>
      <Title>Behandlingar</Title>
      <CardContainer>
        <RoundCard
          roundImgUrl="https://www.fillmurray.com/100/100"
          title="Title"
          secondaryText="Secondary text"
        />
        <RoundCard
          roundImgUrl="https://www.fillmurray.com/100/100"
          title="Title"
          secondaryText="Secondary text"
        />
        <RoundCard
          roundImgUrl="https://www.fillmurray.com/100/100"
          title="Title"
          secondaryText="Secondary text"
        />
        <RoundCard
          roundImgUrl="https://www.fillmurray.com/100/100"
          title="Title"
          secondaryText="Secondary text"
        />
      </CardContainer>
    </Wrapper>
  );
};
