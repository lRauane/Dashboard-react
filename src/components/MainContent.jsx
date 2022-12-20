import React from "react";
import styled from "styled-components";
import Earnings from "./Earnings";
import Info from "./Info";
import Invoices from "./Invoices";
import JoinSlack from "./JoinSlack";
import NavBar from "./Navbar";
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
          <ColumnTwol2></ColumnTwol2>
        </SectionTwor>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 1rem 8rem 1rem 4rem;
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
`;
const SectionTwor = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
`;
const ColumOnel1 = styled.div`
  display: flex;
  gap: 3rem;
`;
const ColumnOne2 = styled.div``;
const InvoicesContainer = styled.div`
height: 60%;


`
const ColumTwol1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`;
const ColumnTwol2 = styled.div``;

export default MainContent;
