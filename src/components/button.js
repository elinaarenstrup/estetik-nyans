import React from "react";
import styled from "styled-components/macro";

const StyledButton = styled.a`
  padding: 0.5rem 1.5rem;
  background-color: pink;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.5s;

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
