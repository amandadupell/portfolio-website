import styled from "styled-components";

export const StyledTitleBox = styled.div`
  padding: 25px 0;
`;

export const Container = styled.div`
  padding: 25px 175px;

  @media screen and (max-width: 1000px) {
    padding: 10px 75px;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledArrow = styled.img`
  margin-top: 50px;
  width: 200px;

  @media screen and (max-width: 1000px) {
    margin-top: 25px;
    width: 100px;
  }
`;

export const StyledHand = styled.img`
  display: flex;
  margin-bottom: 25px;
  height: 250px;
  width: 250px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 800px) {
    animation: 2s ease-in-out spin 0s;
    -webkit-animation: 2s ease-in-out spin 0s;
    -moz-animation: 2s ease-in-out spin 0s;
    -o-animation: 2s ease-in-out spin 0s;
  }

  &:hover {
    animation: 2s ease-in-out spin 2s;
  }
`;
