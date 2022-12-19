import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <Subtitle>In TOP 20%</Subtitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <Subtitle>8 this month</Subtitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="Mobile app" glow />
            <Badge content="Brading" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  padding: 1rem;
  background-color: #2b313d99;
  border-radius: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;
const Card = styled.div`
  background-color: #272d3a99;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;
const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({justify}) => justify && `
    justify-content: space-around;
    width: 90%;
  ` } 
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`

`;
const Subtitle = styled.h5`
color: #fff;
font-weight: normal;
`;

export default Info;
