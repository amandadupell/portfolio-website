import styled from "styled-components";

export const StyledTitleBox = styled.div`
  padding: 25px 0;
  width: 80%;
`;

export const ProjectContainer = styled.div`
  padding: 25px 175px;
`;

export const StyledArrow = styled.img`
  margin-top: 50px;
  width: 200px;
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
