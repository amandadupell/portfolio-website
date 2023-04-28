import styled from "styled-components";
import { $white } from "../../assets/colors";

export const StyledPage = styled.div`
  color: ${$white};
  padding: 50px 50px 100px 50px;
  animation: fadeInAnimation ease-in-out 1s;
  -webkit-animation: fadeInAnimation ease-in-out 1s;
  -moz-animation: fadeInAnimation ease-in-out 1s;
  -o-animation: fadeInAnimation ease-in-out 1s;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 15px;
  }
`;
