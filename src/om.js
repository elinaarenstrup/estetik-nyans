import React from "react";
import styled from "styled-components/macro";
import flowerPic from "./assets/img/flower-eye.png";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
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
  background-color: #fff;
`;

const MidTitle = styled.h2`
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

export const OmMig = () => {
  return (
    <Wrapper id="om">
      <Container>
        <ImgSection></ImgSection>
        <TextSection>
          <MidTitle>Om Mig</MidTitle>
          <SecondaryText>
            Cupcake ipsum dolor. Sit amet muffin candy canes tootsie roll.
            Marshmallow lemon drops danish candy canes topping topping muffin
            soufflé. Danish cookie jujubes bear claw cheesecake chocolate cake
            macaroon. Chocolate marshmallow cake cake chupa chups sesame snaps.
            Oat cake liquorice macaroon bonbon carrot cake pudding jelly carrot
            cake jelly. Candy canes sweet roll brownie cake pie lemon drops.
            Jujubes chocolate cake gingerbread topping dessert pastry cotton
            candy cake. Jujubes gummi bears ice cream pie marzipan dessert
            cupcake.
          </SecondaryText>
        </TextSection>
      </Container>
    </Wrapper>
  );
};
