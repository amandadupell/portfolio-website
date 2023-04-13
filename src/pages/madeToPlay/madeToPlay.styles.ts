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

export const Gigamap = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  display: block;
  margin-bottom: 100px;
`;

export const Process = styled.img`
  width: 50%;
  height: auto;
`;

export const GuidedPlay = styled(Process)``;

export const DesignSystem = styled(Process)`
  padding-right: 50px;

  @media screen and (max-width: 1000px) {
    padding: 0;
    width: 100%;
  }
`;
