import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import { sectionOne, sectionTwo } from "./constants";
import { SectionOne, SectionTwo, Gigamap } from "./madeToPlay.styles";
import MadeToPlayCoverImage from "../../images/madeToPlay/madeToPlayCover.png";
import GigamapImage from "../../images/madeToPlay/gigamap.png";

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
    </Page>
  );
};

export default MadeToPlayPage;
