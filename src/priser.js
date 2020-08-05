import React from "react";
import styled from "styled-components/macro";
import { Button } from "./components/button";

const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Container = styled.div`
  width: 25rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
  font-family: "Playfair Display", serif;
  font-weight: lighter;
  font-size: 4rem;
  text-transform: uppercase;
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
  text-align: center;
`;

const Table = styled.table`
  width: 25rem;
  cursor: default;
  border-collapse: collapse;
  font-family: "Playfair Display", serif;
  td,
  th {
    padding: 1.5rem;
  }

  th {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: pink;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export const Priser = () => {
  return (
    <Wrapper id="priser">
      <Title>Priser</Title>
      <Table>
        <tr>
          <th>Behandling</th>
          <th>Pris</th>
        </tr>
        <tr>
          <td>Microblading</td>
          <td>från 3495 sek</td>
        </tr>
        <tr>
          <td>Eyeliner</td>
          <td>från 1495sek</td>
        </tr>
        <tr>
          <td>Liposonic</td>
          <td>från 2999sek</td>
        </tr>
        <tr>
          <td>Plasmapen</td>
          <td>från 1000sek</td>
        </tr>
      </Table>
      <Container>
        <MidTitle>Boka Online</MidTitle>
        <SecondaryText>
          För mer specificerad prislista var vänlig besök "Boka online" via
          länken nedan.
        </SecondaryText>
        <Button
          text="Boka tid"
          href="https://www.bokadirekt.se/places/estetik-nyans-22696"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Container>
    </Wrapper>
  );
};
