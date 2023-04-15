import React from "react";
import { Paragraph, Page, TextComponent, CoverImage } from "../../components";
import { TextType } from "../../types/text";
import { sectionOne } from "./constants";
import { SectionOne } from "./letterboxd.styles";
import LetteboxdCoverImage from "../../images/letterboxd/letterboxdCoverImage.png";

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
    </Page>
  );
};

export default LetterboxdPage;
