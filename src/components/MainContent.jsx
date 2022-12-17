import React from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

function MainContent() {
  return (
    <Container>
      <NavBar />
      <SubContainer>
        <SectionOne>
          <ColumOnel1></ColumOnel1>
          <ColumTwol1></ColumTwol1>
        </SectionOne>
        <SectionTwor>
          <ColumnOne2></ColumnOne2>
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
  height: 20%;
`;
const SectionOne = styled.div``;
const SectionTwor = styled.div``;
const ColumOnel1 = styled.div``;
const ColumnOne2 = styled.div``;
const ColumTwol1 = styled.div``;
const ColumnTwol2 = styled.div``;

export default MainContent;
