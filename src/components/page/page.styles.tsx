import styled from "styled-components";

export const StyledPage = styled.div`
  padding: 50px 100px 200px 100px;
  animation: fadeInAnimation ease-in-out 1s;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 25px 50px;
  }
`;
