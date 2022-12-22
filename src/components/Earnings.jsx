import React from 'react';
import styled from 'styled-components';
import {IoStatsChart} from 'react-icons/io5'
import { hoverEffect } from '../utils';

function Earnings() {
  return <EarningCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningText>Earnigs</EarningText>
        <Earning>R$7,890</Earning>
        <EarningIncrease>= 10% since last month</EarningIncrease>
      </CardContent>
    </EarningCard>
  
}

const EarningCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #272d3a99;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover{
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width:1080px){
    width: 80%;
    margin:3rem auto;
    background-color: #1e2433;
  }
`
const CardContent = styled.div`
  margin: 1rem;
`
const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg{
    height: 4rem;
    width: 4rem
  }
`
const EarningText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`
const Earning = styled.h2`
  text-align: center;
`
const EarningIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: #088171;
  padding: 0.5;
  border-radius: 2rem;
`

export default Earnings;