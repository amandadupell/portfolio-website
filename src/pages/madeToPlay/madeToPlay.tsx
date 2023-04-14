import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import {
  finalDesigns,
  sectionEight,
  sectionFive,
  sectionFour,
  sectionNine,
  sectionOne,
  sectionSeven,
  sectionSix,
  sectionTen,
  sectionThree,
  sectionTwo,
} from "./constants";
import {
  Changes,
  DesignSystem,
  FinalDesign,
  FinalDesignSection,
  Gigamap,
  GuidedPlay,
  Illustrations,
  ImageContainer,
  Observation,
  Photography,
  Process,
  SectionEight,
  SectionFive,
  SectionFour,
  SectionNine,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionTen,
  SectionThree,
  SectionTwo,
  UserTesting,
} from "./madeToPlay.styles";
import ChangesImage from "../../images/madeToPlay/changes.png";
import DesignSystemImage from "../../images/madeToPlay/designSystem.png";
import GigamapImage from "../../images/madeToPlay/gigamap.png";
import GuidedPlayImage from "../../images/madeToPlay/guidedplay1.png";
import IllustrationsImage from "../../images/madeToPlay/illustrations.png";
import MadeToPlayCoverImage from "../../images/madeToPlay/madeToPlayCover.png";
import ObservationsImage from "../../images/madeToPlay/observations.png";
import PhotographyImage from "../../images/madeToPlay/photography.png";
import ProcessImage from "../../images/madeToPlay/process1.png";
import UserTestingImage from "../../images/madeToPlay/usertesting.png";

const MadeToPlayPage = () => {
  return (
    <Page>
      <TextComponent
        type={TextType.SUBTITLE}
        text="Made To Play | Design Capstone"
      />
      <TextComponent
        type={TextType.HEADER}
        text="a do-it-yourself guide and handbook for parental monitoring"
      />
      <SectionOne>
        {sectionOne.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionOne>
      <CoverImage src={MadeToPlayCoverImage} />
      <TextComponent
        type={TextType.SUBHEADER}
        text="01 research and planning"
      />
      <SectionTwo>
        {sectionTwo.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionTwo>
      <Gigamap src={GigamapImage} />
      <ImageContainer>
        <Process src={ProcessImage} />
        <GuidedPlay src={GuidedPlayImage} />
      </ImageContainer>
      <TextComponent type={TextType.SUBHEADER} text="02 branding" />
      <SectionThree>
        {sectionThree.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <DesignSystem src={DesignSystemImage} />
      </SectionThree>
      <SectionFour>
        {sectionFour.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionFour>
      <Illustrations src={IllustrationsImage} />
      <SectionFive>
        {sectionFive.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <Photography src={PhotographyImage} />
      </SectionFive>
      <TextComponent type={TextType.SUBHEADER} text="03 user testing" />
      <SectionSix>
        {sectionSix.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <UserTesting src={UserTestingImage} />
      </SectionSix>
      <SectionSeven>
        <Observation src={ObservationsImage} />
        {sectionSeven.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionSeven>
      <SectionEight>
        {sectionEight.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
        <Changes src={ChangesImage} />
      </SectionEight>
      <TextComponent type={TextType.SUBHEADER} text="04 final designs" />
      <SectionNine>
        {sectionNine.map((item) => (
          <Paragraph text={item.text} />
        ))}
      </SectionNine>
      <FinalDesignSection>
        {finalDesigns.map((item) => (
          <FinalDesign src={item} />
        ))}
      </FinalDesignSection>
      <TextComponent type={TextType.SUBHEADER} text="05 impact" />
      <SectionTen>
        {sectionTen.map((item) => (
          <Paragraph title={item.title} text={item.text} />
        ))}
      </SectionTen>
    </Page>
  );
};

export default MadeToPlayPage;
