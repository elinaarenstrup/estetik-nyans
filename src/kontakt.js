import React from "react";
import styled from "styled-components/macro";
import flowerPic from "./assets/img/flower-eye.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const ImgSection = styled.div`
  width: 500px;
  height: 70vh;
  background-image: url(${flowerPic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: pink;
`;

const TextSection = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 70vh;
  background-color: #f1f1f1;
`;

const StyledLink = styled.a`
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: pink;
  }
`;

const SecondaryText = styled.p`
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  text-align: left;
`;

const MidTitle = styled.h2`
  margin: 1rem 0rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Kontakt = () => {
  return (
    <Wrapper id="kontakt">
      <Title>Kontakt</Title>
      <Container>
        <TextSection>
          <MidTitle>Öppet 10.00 - 19.00</MidTitle>
          <SecondaryText>
            Drottninggatan 31 <br></br>25221 Helsingborg<br></br> Sweden
          </SecondaryText>
          <StyledLink
            aria-label="telefon nummer"
            href="tel:+46709993378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPhone} /> 0709-99 33 78
          </StyledLink>
          <StyledLink
            aria-label="email"
            href="mailto:anna@estetiknyans.se?subject=Hej Anna!&body=Hej Anna!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> anna@estetiknyans.se
          </StyledLink>
        </TextSection>
        <ImgSection></ImgSection>
      </Container>
    </Wrapper>
  );
};
