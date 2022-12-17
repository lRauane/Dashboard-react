import React from 'react';
import styled from 'styled-components';

function Badge({content}) {
  return <Div>{content}</Div>
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #077E71;
  cursor: pointer;
`

export default Badge;