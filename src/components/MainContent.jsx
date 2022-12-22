import React from "react";
import styled from "styled-components";
import Earnings from "./Earnings";
import Info from "./Info";
import Invoices from "./Invoices";
import JoinSlack from "./JoinSlack";
import NavBar from "./Navbar";
import ProjectRecommended from "./ProjectRecommended";
import Projects from "./Projects";

function MainContent() {
  return (
    <Container>
      <NavBar />
      <SubContainer>
        <SectionOne>
          <ColumOnel1>
            <Earnings />
            <Info />
          </ColumOnel1>
          <ColumTwol1>
            <TitleText>Your Projects</TitleText>
            <Projects />
          </ColumTwol1>
        </SectionOne>
        <SectionTwor>
          <ColumnOne2>
            <InvoicesContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoicesContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwol2>
            <TitleText>Recommended Projects</TitleText>
            <ProjectRecommended />
          </ColumnTwol2>
        </SectionTwor>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    width: 100%;
    margin: 1rem 0 0 0;
    flex-direction: column;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const TitleText = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  height: 20%;
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const SectionTwor = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
const ColumOnel1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const InvoicesContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const ColumTwol1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;
const ColumnTwol2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
