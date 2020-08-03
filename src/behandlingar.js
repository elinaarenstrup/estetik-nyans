import React from "react";
import styled from "styled-components/macro";
import { RoundCard } from "./components/roundCard";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 5rem;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Behandlingar = (roundImgUrl, title, secondaryText) => {
  return (
    <Wrapper>
      <Title>Behandlingar</Title>
      <CardContainer>
        <RoundCard
          roundImgUrl="https://images.unsplash.com/photo-1484311969987-0a20cd9afedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          title="Microblading"
          secondaryText="Cupcake ipsum dolor. Sit amet muffin candy canes tootsie roll. Marshmallow lemon drops danish candy canes topping topping muffin soufflé. Danish cookie jujubes bear claw cheesecake chocolate cake macaroon. Chocolate marshmallow cake cake chupa chups sesame snaps. Oat cake liquorice macaroon bonbon carrot cake pudding jelly carrot cake jelly. Candy canes sweet roll brownie cake pie lemon drops. Jujubes chocolate cake gingerbread topping dessert pastry cotton candy cake. Jujubes gummi bears ice cream pie marzipan dessert cupcake."
        />
        <RoundCard
          roundImgUrl="https://images.unsplash.com/photo-1484311969987-0a20cd9afedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          title="HIFU Liposonic 3D"
          secondaryText="Cupcake ipsum dolor. Sit amet muffin candy canes tootsie roll. Marshmallow lemon drops danish candy canes topping topping muffin soufflé. Danish cookie jujubes bear claw cheesecake chocolate cake macaroon. Chocolate marshmallow cake cake chupa chups sesame snaps. Oat cake liquorice macaroon bonbon carrot cake pudding jelly carrot cake jelly. Candy canes sweet roll brownie cake pie lemon drops. Jujubes chocolate cake gingerbread topping dessert pastry cotton candy cake. Jujubes gummi bears ice cream pie marzipan dessert cupcake."
        />
        <RoundCard
          roundImgUrl="https://images.unsplash.com/photo-1484311969987-0a20cd9afedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          title="Scalp micropigmentation"
          secondaryText="Cupcake ipsum dolor. Sit amet muffin candy canes tootsie roll. Marshmallow lemon drops danish candy canes topping topping muffin soufflé. Danish cookie jujubes bear claw cheesecake chocolate cake macaroon. Chocolate marshmallow cake cake chupa chups sesame snaps. Oat cake liquorice macaroon bonbon carrot cake pudding jelly carrot cake jelly. Candy canes sweet roll brownie cake pie lemon drops. Jujubes chocolate cake gingerbread topping dessert pastry cotton candy cake. Jujubes gummi bears ice cream pie marzipan dessert cupcake."
        />
        <RoundCard
          roundImgUrl="https://images.unsplash.com/photo-1484311969987-0a20cd9afedc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          title="Plasmapen"
          secondaryText="Cupcake ipsum dolor. Sit amet muffin candy canes tootsie roll. Marshmallow lemon drops danish candy canes topping topping muffin soufflé. Danish cookie jujubes bear claw cheesecake chocolate cake macaroon. Chocolate marshmallow cake cake chupa chups sesame snaps. Oat cake liquorice macaroon bonbon carrot cake pudding jelly carrot cake jelly. Candy canes sweet roll brownie cake pie lemon drops. Jujubes chocolate cake gingerbread topping dessert pastry cotton candy cake. Jujubes gummi bears ice cream pie marzipan dessert cupcake."
        />
      </CardContainer>
    </Wrapper>
  );
};
