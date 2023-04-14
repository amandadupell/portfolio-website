import styled from "styled-components";

export const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 125px 0;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin: 50px 0;
    flex-direction: column;
    padding: 0;
  }
`;

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
export const SectionTen = styled(SectionSeven)``;

export const Gigamap = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const Illustrations = styled(Gigamap)``;
export const FinalDesign = styled(Gigamap)`
  margin: 50px 0;
  border: 1px solid black;
`;

export const ImageContainer = styled.div`
  display: block;
  margin-bottom: 100px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

export const Process = styled.img`
  width: 50%;
  height: auto;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

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
