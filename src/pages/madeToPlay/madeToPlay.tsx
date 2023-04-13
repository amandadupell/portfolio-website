import React from "react";
import { Page, TextComponent } from "../../components";
import { TextType } from "../../types/text";

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
    </Page>
  );
};

export default MadeToPlayPage;
