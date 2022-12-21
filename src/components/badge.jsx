import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";

function Badge({ content,clean=false, glow = false, paid = false, late = false }) {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean}>
      {content}
    </Div>
  );
}

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: #077e71;
  cursor: pointer;

  ${({ clean }) =>
    clean &&
    `
    border: 0.05rem solid ${themeColor};
    color: #fff;
    background-color: #077e71;
  `}

  ${({ glow }) =>
    glow &&
    `
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    font-weigh: normal;
    color: #2f23d;
    background-color: rgba(109, 134, 245, 0.192);
  `}

  ${({paid}) => paid && `
    background-color:#70e00041;
    color: #70e000;
  `
  }
  ${({late}) => late && `
    background-color:#ff595e41;
    color: #ff595e;
  `
  }
`;

export default Badge;
