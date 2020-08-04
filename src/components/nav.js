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
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: none;
    color: pink;
  }
`;

export const Nav = () => {
  return (
    <Wrapper>
      <StyledLink href="/">Hem</StyledLink>
      <StyledLink href="#om">Om mig</StyledLink>
      <StyledLink href="#behandlingar">Behandlingar</StyledLink>
      <StyledLink href="#priser">Priser</StyledLink>
      <StyledLink href="#kontakt">Kontakt</StyledLink>
    </Wrapper>
  );
};
