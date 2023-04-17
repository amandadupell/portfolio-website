import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import {
  sectionEight,
  sectionNine,
  sectionFive,
  sectionFour,
  sectionOne,
  sectionSeven,
  sectionSix,
  sectionSixText,
  sectionThree,
  sectionTwo,
} from "./constants";
import {
  FocusArea,
  HomepageFlow,
  ImageContainer,
  SectionEight,
  SectionFive,
  SectionFour,
  SectionNine,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionThree,
  SectionTwo,
  SignUpFlow,
  Sketch,
} from "./letterboxd.styles";
import { HalfImage } from "../shared.styles";
import LetteboxdCoverImage from "../../images/letterboxd/letterboxdCoverImage.png";
import ExisitingBrandImage from "../../images/letterboxd/existingbrand.png";
import UserFeedbackImage from "../../images/letterboxd/userfeedback.png";
import SignUpFlowImage from "../../images/letterboxd/signupflow.png";
import HomepageFlowImage from "../../images/letterboxd/homepageflow.png";

const LetterboxdPage = () => {
  return (
    <Page>
      <TextComponent
        type={TextType.SUBTITLE}
        text="Letterboxd | Personal Project"
      />
      <TextComponent
        type={TextType.HEADER}
        text="a mobile application and brand redesign"
      />
      <SectionOne>
        {sectionOne.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionOne>
      <CoverImage src={LetteboxdCoverImage} />
      <TextComponent
        type={TextType.SUBHEADER}
        text="01 existing brand and research"
      />
      <SectionTwo>
        {sectionTwo.map((item) => (
          <Paragraph text={item.text} />
        ))}
        <HalfImage src={ExisitingBrandImage} />
      </SectionTwo>
      <SectionThree>
        {sectionThree.map((item) => (
          <Paragraph size="large" header={item.header} text={item.text} />
        ))}
      </SectionThree>
      <SectionFour>
        <HalfImage src={UserFeedbackImage} />
        {sectionFour.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionFour>
      <TextComponent type={TextType.SUBHEADER} text="02 strategy plan" />
      <SectionFive>
        {sectionFive.map((item) => (
          <Paragraph header={item.header} title={item.title} text={item.text} />
        ))}
      </SectionFive>
      <SectionSix>
        {sectionSix.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <FocusArea>
          <TextComponent type={TextType.TITLE} text={sectionSixText} />
        </FocusArea>
      </SectionSix>
      <SectionSeven>
        {sectionSeven.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionSeven>
      <ImageContainer>
        <TextComponent bold type={TextType.SUBTITLE} text="sign up" />
        <SignUpFlow src={SignUpFlowImage} />
        <TextComponent bold type={TextType.SUBTITLE} text="homepage" />
        <HomepageFlow src={HomepageFlowImage} />
      </ImageContainer>
      <TextComponent type={TextType.SUBHEADER} text="03 brainstorm" />
      <SectionEight>
        {sectionEight.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionEight>
      <SectionNine>
        {sectionNine.map((item) => (
          <Sketch src={item} />
        ))}
      </SectionNine>
    </Page>
  );
};

export default LetterboxdPage;
