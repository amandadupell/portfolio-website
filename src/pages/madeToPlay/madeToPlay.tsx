import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import { sectionFour, sectionOne, sectionThree, sectionTwo } from "./constants";
import {
  SectionOne,
  SectionTwo,
  Gigamap,
  ImageContainer,
  GuidedPlay,
  Process,
  SectionThree,
  DesignSystem,
  SectionFour,
} from "./madeToPlay.styles";
import MadeToPlayCoverImage from "../../images/madeToPlay/madeToPlayCover.png";
import GigamapImage from "../../images/madeToPlay/gigamap.png";
import ProcessImage from "../../images/madeToPlay/process1.png";
import GuidedPlayImage from "../../images/madeToPlay/guidedplay1.png";
import DesignSystemImage from "../../images/madeToPlay/designSystem.png";

const MadeToPlayPage = () => {
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
    </Page>
  );
};

export default MadeToPlayPage;
