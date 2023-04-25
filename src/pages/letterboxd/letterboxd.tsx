import React from "react";
import {
  Paragraph,
  Page,
  TextComponent,
  CoverImage,
  AnimationSection,
} from "../../components";
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
  sectionTen,
  sectionEleven,
  sectionTwelve,
  sectionThirteen,
} from "./constants";
import {
  FocusArea,
  HomepageFlow,
  ImageContainer,
  SectionEight,
  SectionEleven,
  SectionFive,
  SectionFour,
  SectionNine,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionTen,
  SectionThirteen,
  SectionThree,
  SectionTwelve,
  SectionTwo,
  SignUpFinal,
  SignUpFlow,
  Sketch,
  TextContainer,
} from "./letterboxd.styles";
import { HalfImage } from "../shared.styles";
import LetteboxdCoverImage from "../../images/letterboxd/letterboxdCoverImage.png";
import ExisitingBrandImage from "../../images/letterboxd/existingbrand.png";
import UserFeedbackImage from "../../images/letterboxd/userfeedback.png";
import SignUpFlowImage from "../../images/letterboxd/signupflow.png";
import HomepageFlowImage from "../../images/letterboxd/homepageflow.png";
import SignUpFinalImage from "../../images/letterboxd/signupfinal.png";
import HomeFinalImage from "../../images/letterboxd/homefinal.png";
import {
  letterboxdCoverImageDesc,
  exisitingBrandImage,
  userFeedbackImageDesc,
  signUpFinalImageDesc,
  homepageFlowImageDesc,
  signUpFlowImageDesc,
  homeFinalImageDesc,
} from "../../images/letterboxd/imagedescriptions";

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
      <CoverImage alt={letterboxdCoverImageDesc} src={LetteboxdCoverImage} />
      <AnimationSection>
        <TextComponent
          type={TextType.SUBHEADER}
          text="01 existing brand and research"
        />
      </AnimationSection>
      <AnimationSection>
        <SectionTwo>
          {sectionTwo.map((item) => (
            <Paragraph text={item.text} />
          ))}
          <HalfImage alt={exisitingBrandImage} src={ExisitingBrandImage} />
        </SectionTwo>
      </AnimationSection>
      <AnimationSection>
        <SectionThree>
          {sectionThree.map((item) => (
            <Paragraph size="large" header={item.header} text={item.text} />
          ))}
        </SectionThree>
      </AnimationSection>
      <AnimationSection>
        <SectionFour>
          <HalfImage alt={userFeedbackImageDesc} src={UserFeedbackImage} />
          {sectionFour.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionFour>
      </AnimationSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="02 strategy plan" />
        <SectionFive>
          {sectionFive.map((item) => (
            <Paragraph
              header={item.header}
              title={item.title}
              text={item.text}
            />
          ))}
        </SectionFive>
      </AnimationSection>
      <SectionSix>
        <AnimationSection>
          {sectionSix.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </AnimationSection>
        <AnimationSection>
          <FocusArea>
            <TextComponent type={TextType.TITLE} text={sectionSixText} />
          </FocusArea>
        </AnimationSection>
      </SectionSix>
      <SectionSeven>
        <AnimationSection>
          {sectionSeven.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </AnimationSection>
      </SectionSeven>
      <ImageContainer>
        <AnimationSection>
          <TextComponent bold type={TextType.SUBTITLE} text="sign up" />
          <SignUpFlow alt={signUpFlowImageDesc} src={SignUpFlowImage} />
        </AnimationSection>
        <AnimationSection>
          <TextComponent bold type={TextType.SUBTITLE} text="homepage" />
          <HomepageFlow alt={homepageFlowImageDesc} src={HomepageFlowImage} />
        </AnimationSection>
      </ImageContainer>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="03 brainstorm" />
        <SectionEight>
          {sectionEight.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionEight>
      </AnimationSection>
      <AnimationSection>
        <SectionNine>
          {sectionNine.map((item) => (
            <Sketch alt={item.altText} src={item.src} />
          ))}
        </SectionNine>
      </AnimationSection>
      <AnimationSection>
        <SectionTen>
          {sectionTen.map((item) => (
            <Sketch alt={item.altText} src={item.src} />
          ))}
        </SectionTen>
      </AnimationSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="04 final designs" />
      </AnimationSection>
      <AnimationSection>
        <SectionEleven>
          {sectionEleven.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}

          <SignUpFinal alt={signUpFinalImageDesc} src={SignUpFinalImage} />
        </SectionEleven>
      </AnimationSection>
      <AnimationSection>
        <SectionTwelve>
          {sectionTwelve.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionTwelve>
      </AnimationSection>
      <AnimationSection>
        <SectionThirteen>
          <TextContainer>
            {sectionThirteen.map((item) => (
              <Paragraph title={item.title} text={item.text} />
            ))}
          </TextContainer>
          <HalfImage alt={homeFinalImageDesc} src={HomeFinalImage} />
        </SectionThirteen>
      </AnimationSection>
    </Page>
  );
};

export default LetterboxdPage;
