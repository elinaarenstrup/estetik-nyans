import React from "react";
import styled from "styled-components/macro";
import logoPic from "../assets/logo-vit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  background-color: pink;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: left;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const DesignedBy = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

const MidTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
`;

const SecondaryText = styled.p`
  font-family: "Playfair Display", serif;
  font-size: 0.7rem;
  text-align: center;
  color: #fff;
`;

const StyledLink = styled.a`
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: none;
    color: #ffe6e6;
  }
`;

const SmallStyledLink = styled.a`
  margin-left: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 0.7rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: none;
    color: #ffe6e6;
  }
`;

const SocialMediaIcon = styled.a`
  margin-left: 0.5rem;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: none;
    color: #ffe6e6;
  }
`;

const Logo = styled.img`
  width: 15rem;
`;

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo src={logoPic} alt="Logo" />
        <Container>
          <MidTitle>Kontakt</MidTitle>
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
          <StyledLink
            aria-label="boka tid"
            href="https://www.bokadirekt.se/places/estetik-nyans-22696"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boka Tid
          </StyledLink>
        </Container>
        <Container>
          <MidTitle>Följ mig</MidTitle>
          <SocialContainer>
            <SocialMediaIcon
              aria-label="facebook icon"
              href="https://www.facebook.com/estetiknyans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} aria-label="facebookikon" />
            </SocialMediaIcon>
            <SocialMediaIcon
              aria-label="instagram icon"
              href="https://www.instagram.com/estetiknyans"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} aria-label="instagram ikon" />
            </SocialMediaIcon>
          </SocialContainer>
        </Container>
      </Wrapper>
      <DesignedBy>
        <SecondaryText>
          Webdev & design
          <SmallStyledLink
            aria-label="email"
            href="mailto:hej@elinaarenstrup.se?subject=Vi gör något kul ihop!&body=Hej Elin!"
            target="_blank"
            rel="noopener noreferrer"
          >
            hej@elinaarenstrup.se
          </SmallStyledLink>
        </SecondaryText>
      </DesignedBy>
    </>
  );
};
