import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import avatarImage from "../assets/avatarImage.jpg";
import { RiFileCopyLine} from "react-icons/ri";
import { BsFillBarChartFill, BsFillInboxFill} from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={avatarImage} />
        <Name>Rauane Lima</Name>
        <Badge content="Premium" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <BsFillBarChartFill />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Campaingns</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Reports</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Analitics</h3>
          </Link>
          <Link>
            <BsFillInboxFill />
            <h3>Inbox</h3>
          </Link>
          <Link>
            <FiSettings />
            <h3>Settings</h3>
          </Link>
        </Links>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #272d3a99;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;
const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem; 
  padding:10px;
  display: flex;
  gap: 1.1rem;
  color: white;
  &:hover{
    background-color: #6f737ce8;
    border-radius: 10px;
  }
  h3{
    font-weight: 300;
  }
  svg{
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;



export default Sidebar;
