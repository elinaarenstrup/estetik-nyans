import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.a`
  padding: 1.5rem 2rem;
  background-color: pink;
  color: #fff;
  border: none;
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;
  -webkit-transition-duration: 0.4s;

  &:hover {
    background-color: #ffe6e6;
  }
`;
export const Button = ({ text, className, href, target }) => {
  return (
    <StyledButton
      className={className}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {text}
    </StyledButton>
  );
};
