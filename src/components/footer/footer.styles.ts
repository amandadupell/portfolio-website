import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  display: flex;
  padding-bottom: 50px;
  border-top: 3px dotted black;
  height: 30vh;
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

export const StyledLink = styled.a`
  text-decoration: none;

  @media screen and (max-width: 800px) {
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Scissors = styled.img`
  position: relative;
  top: 21px;
  left: 75%;

  @keyframes animate {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
  animation: animate 30s linear infinite;
`;
