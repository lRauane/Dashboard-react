import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImage from "../assets/avatarImage.jpg";

function ProjectRecommended() {
  return (
    <RecommendedProject>
      <CardContainer>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Rauane Lima</InfoName>
              <InfoUpadate>Update 10m ago</InfoUpadate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>
          Need a designer to form branding essetials for my business.
        </Title>
        <ProjectInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          aspernatur quis illum eum? Fugiat laboriosam, a, aliquid ab ipsam eum
          expedita dolorem dolor aut, corporis asperiores officiis maiores
          alias. Minus?
        </ProjectInfo>
        <PriceContainer>
          <Price>R$ 1200/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContainer>
    </RecommendedProject>
  );
}

const RecommendedProject = styled.div`
  border-radius: 1rem;
  height: 135%;
  width: 14rem;
  padding: 1rem;
  background-color: #2b313d99;
  color: #fff;
  width: 96%;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;
const CardContainer = styled.div`
  margin: 0.4rem;
`;
const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpadate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  margin: 1rem;
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 1rem;
  padding: 0;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`;
const Price = styled.div``;

export default ProjectRecommended;
