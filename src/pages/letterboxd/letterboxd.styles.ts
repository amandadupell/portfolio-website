import styled from "styled-components";
import { FullImage, HalfImage, Section } from "../shared.styles";

export const SectionOne = styled(Section)``;
export const SectionTwo = styled(Section)``;
export const SectionThree = styled(Section)`
  justify-content: space-around;
`;
export const SectionFour = styled(SectionThree)`
  align-items: center;
`;
export const SectionFive = styled(Section)``;
export const SectionSix = styled(Section)`
  flex-direction: column;
`;
export const SectionSeven = styled(Section)``;
export const SectionEight = styled(Section)``;
export const SectionNine = styled(Section)``;

export const FocusArea = styled.div`
  display: flex;
  padding: 100px 100px 0 100px;

  @media screen and (max-width: 800px) {
    padding: 10px 10px 0 10px;
  }
`;

export const SignUpFlow = styled(FullImage)`
  padding: 75px 0;
  align-self: center;
`;
export const HomepageFlow = styled(SignUpFlow)``;

export const Sketch = styled(HalfImage)`
  width: 30%;

  @media screen and (max-width: 1000px) {
    width: 50%;
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
