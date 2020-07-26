import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const OmMig = () => {
  return (
    <Wrapper>
      <Title>Om Mig</Title>
    </Wrapper>
  );
};
