import React from "react";
import styled from "styled-components/macro";
import headerPic from "../assets/hero.jpg";
import logoPic from "../assets/logo-svart.png";
import { Button } from "./button";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: pink;
  background-image: url(${headerPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Logo = styled.img`
  margin-bottom: 5rem;
  width: 15rem;
`;

/* const OutlinedButton = styled(Button)`
  background-color: #fff;
  color: pink;
  border: 0.5px solid pink;

  &:hover {
    background-color: ##ffe6e6;
  }
`; */

export const Header = () => {
  return (
    <Wrapper>
      <Logo src={logoPic} alt="Logo" />
      <Button text="Kontakta mig" href="mailto:name@email.se" target="_blank" />
    </Wrapper>
  );
};
