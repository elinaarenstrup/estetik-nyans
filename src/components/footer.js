import React from "react";
import styled from "styled-components";
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
  align-items: center;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const MidTitle = styled.h2`
  margin-bottom: 1rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
`;

const StyledLink = styled.a`
  margin-left: 1rem;
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

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <MidTitle>Kontakt</MidTitle>
        <StyledLink>
          <FontAwesomeIcon icon={faPhone} /> 0763-xxxx
        </StyledLink>
        <StyledLink
          aria-label="email"
          href="mailto:name@email.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} /> name@email.se
        </StyledLink>
        <StyledLink>Boka Tid</StyledLink>
      </Container>
      <MidTitle>Footer</MidTitle>
      <Container>
        <MidTitle>Följ mig</MidTitle>
        <SocialContainer>
          <SocialMediaIcon
            aria-label="facebook icon"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} aria-label="facebookikon" />
          </SocialMediaIcon>
          <SocialMediaIcon
            aria-label="instagram icon"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} aria-label="instagram ikon" />
          </SocialMediaIcon>
        </SocialContainer>
      </Container>
    </Wrapper>
  );
};
