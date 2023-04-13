import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import { sectionOne } from "./constants";
import { SectionOne } from "./madeToPlay.styles";
import MadeToPlayCoverImage from "../../images/madeToPlay/madeToPlayCover.png";

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
    </Page>
  );
};

export default MadeToPlayPage;
