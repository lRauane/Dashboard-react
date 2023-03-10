import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";

function NavBar() {
  return (
    <NavContainer>
      <Text>
        Good Night, <br />
        <span>Rauane Lima</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
      </InputContainer>

      <MakeContainer>
        <TextMore>Make a new Product</TextMore>
        <IconMore>
          <BsPlusLg />
        </IconMore>
      </MakeContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin-bottom: 2rem;
  @media screen and (min-width: 320px) and (max-width:1080px){
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
const Text = styled.h1`
  color: #ffffff;
  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #16b88f;
  }
  @media screen and (min-width: 320px) and (max-width:1080px){
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  height: 4.1.2rem;
  width: 3.5rem;
  background-color: #088171;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #0d523b;
  }
`;
const MakeContainer = styled.button`
  background-color: #363e52;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  gap: 5.83px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 231.58px;
  height: 66.04px;
  @media screen and (min-width: 320px) and (max-width:1080px){
   display: none;
  }
`;
const IconMore = styled.div`
  display: flex;
  background-color: #0f6369;
  padding: 10px;
  align-items: center;
  color: white;
`;
const TextMore = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`;
const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5.83px;
  border: none;
  width: 300px;
  height: 66.04px;
  text-align: center;
  color: #FFF;
  

  background: #2e323c;
  border-bottom-right-radius: 11.654px;
  border-top-right-radius: 11.654px;

  @media screen and (min-width: 320px) and (max-width:1080px){
    width: 100%;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export default NavBar;
