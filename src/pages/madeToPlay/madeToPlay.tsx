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
import {
  changesImageDesc,
  designSystemImageDesc,
  gigamapImageDesc,
  guidedPlayImageDesc,
  illustrationsImageDesc,
  madeToPlayCoverImageDesc,
  observationsImageDesc,
  photographyImageDesc,
  processImageDesc,
  usertestingImageDesc,
} from "../../images/madeToPlay/imagedescriptions";

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
      <CoverImage alt={madeToPlayCoverImageDesc} src={MadeToPlayCoverImage} />
      <AnimationSection>
        <TextComponent
          type={TextType.SUBHEADER}
          text="01 research and planning"
        />
        <SectionTwo>
          {sectionTwo.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionTwo>
      </AnimationSection>
      <AnimationSection>
        <Gigamap alt={gigamapImageDesc} src={GigamapImage} />
      </AnimationSection>
      <AnimationSection>
        <ImageContainer>
          <Process alt={processImageDesc} src={ProcessImage} />
          <GuidedPlay alt={guidedPlayImageDesc} src={GuidedPlayImage} />
        </ImageContainer>
      </AnimationSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="02 branding" />
        <SectionThree>
          {sectionThree.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <DesignSystem alt={designSystemImageDesc} src={DesignSystemImage} />
        </SectionThree>
      </AnimationSection>
      <AnimationSection>
        <SectionFour>
          {sectionFour.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionFour>
      </AnimationSection>
      <AnimationSection>
        <Illustrations alt={illustrationsImageDesc} src={IllustrationsImage} />
      </AnimationSection>
      <AnimationSection>
        <SectionFive>
          {sectionFive.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <Photography alt={photographyImageDesc} src={PhotographyImage} />
        </SectionFive>
      </AnimationSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="03 user testing" />
        <SectionSix>
          {sectionSix.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <UserTesting alt={usertestingImageDesc} src={UserTestingImage} />
        </SectionSix>
      </AnimationSection>
      <AnimationSection>
        <SectionSeven>
          <Observation alt={observationsImageDesc} src={ObservationsImage} />
          {sectionSeven.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
        </SectionSeven>
      </AnimationSection>
      <AnimationSection>
        <SectionEight>
          {sectionEight.map((item) => (
            <Paragraph title={item.title} text={item.text} />
          ))}
          <Changes alt={changesImageDesc} src={ChangesImage} />
        </SectionEight>
      </AnimationSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="04 final designs" />
        <SectionNine>
          {sectionNine.map((item) => (
            <Paragraph text={item.text} />
          ))}
        </SectionNine>
      </AnimationSection>
      <FinalDesignSection>
        {finalDesigns.map((item) => (
          <AnimationSection>
            <FinalDesign src={item.src} alt={item.altText} />
          </AnimationSection>
        ))}
      </FinalDesignSection>
      <AnimationSection>
        <TextComponent type={TextType.SUBHEADER} text="05 impact" />
        <SectionTen>
          {sectionTen.map((item) => (
            <Paragraph
              title={item.title}
              text={item.text}
              link={item.link}
              linkText={item.linkText}
            />
          ))}
        </SectionTen>
      </AnimationSection>
    </Page>
  );
};

export default MadeToPlayPage;
