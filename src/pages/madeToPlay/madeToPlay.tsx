import React from "react";
import { Paragraph, Page, TextComponent } from "../../components";
import { TextType } from "../../types/text";
import { sectionOne } from "./constants";
import { SectionOne } from "./madeToPlay.styles";

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
    </Page>
  );
};

export default MadeToPlayPage;
