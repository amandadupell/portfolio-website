import React from "react";
import { Page, TextComponent } from "../../components";
import { TextType } from "../../types/text";
import { StyledTitleBox } from "./home.styles";

const HomePage = () => {
  return (
    <Page>
      <StyledTitleBox>
        <TextComponent
          type={TextType.SUBTITLE}
          text="hello! my name is Amanda Dupell and i am"
        />
        <TextComponent
          type={TextType.HEADER}
          text="a brooklyn-based developer and designer with a focus on user experiences"
        />
      </StyledTitleBox>
    </Page>
  );
};

export default HomePage;
