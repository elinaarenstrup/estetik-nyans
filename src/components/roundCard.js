import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  margin: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RoundImage = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const Title = styled.h2`
  margin: 1rem 0rem;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const SecondaryText = styled.p`
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
`;

export const RoundCard = ({ roundImgUrl, title, secondaryText }) => {
  return (
    <Container>
      {roundImgUrl && <RoundImage url={roundImgUrl} />}
      {title && <Title>{title}</Title>}
      {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
    </Container>
  );
};