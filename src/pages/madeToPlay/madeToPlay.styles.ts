import styled from "styled-components";
import { FullImage, HalfImage, Section } from "../shared.styles";

export const SectionOne = styled(Section)``;
export const SectionTwo = styled(SectionOne)``;
export const SectionThree = styled(SectionOne)``;
export const SectionFour = styled(SectionOne)``;
export const SectionFive = styled(SectionOne)``;
export const SectionSix = styled(SectionOne)``;
export const SectionSeven = styled(SectionOne)`
  justify-content: space-around;
`;
export const SectionEight = styled(SectionOne)``;
export const SectionNine = styled(SectionOne)``;
export const SectionTen = styled(SectionSeven)`
  margin-bottom: 0;
`;

export const FinalDesignSection = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export const Gigamap = styled(FullImage)``;
export const Illustrations = styled(Gigamap)``;
export const FinalDesign = styled(Gigamap)`
  margin: 50px 0;
  border: 1px solid black;

  @media screen and (max-width: 800px) {
    margin: 25px 0;
    border: 0.5px solid black;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

export const Process = styled(HalfImage)``;
export const GuidedPlay = styled(Process)``;
export const Observation = styled(Process)``;

export const DesignSystem = styled(Process)`
  padding-right: 50px;

  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const Photography = styled(DesignSystem)``;
export const UserTesting = styled(DesignSystem)``;
export const Changes = styled(DesignSystem)``;
