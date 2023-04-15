import styled from "styled-components";
import { Section } from "../shared.styles";

export const Container = styled(Section)`
  justify-content: space-around;
`;

export const StyledProfile = styled.img`
  width: 50%;
  height: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
