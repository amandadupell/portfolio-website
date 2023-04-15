import styled from "styled-components";
import { Section } from "../shared.styles";

export const SectionOne = styled(Section)``;

export const StyledImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const StyledImage2 = styled.img`
  width: 50%;
  height: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
