import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background-color: #fff;
  opacity: 90%;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledLink = styled.a`
  margin-left: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: pink;
  }
`;

export const Nav = () => {
  return (
    <Wrapper>
      <StyledLink to={"/"}>Hem</StyledLink>
      <StyledLink>Om mig</StyledLink>
      <StyledLink>Behandlingar</StyledLink>
      <StyledLink>Priser</StyledLink>
      <StyledLink>Kontakt</StyledLink>
    </Wrapper>
  );
};
