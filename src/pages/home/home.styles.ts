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
  height: 300px;
  width: 300px;
  animation: 1.5s ease-out 0s slideInRight, spin 2s;

  @keyframes slideInRight {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(180deg);
    }
  }

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
  }
`;
