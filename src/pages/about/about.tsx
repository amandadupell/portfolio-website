import React from "react";
import { Page, Paragraph, TextComponent } from "../../components";
import { TextType } from "../../types/text";
import { Container, StyledProfile } from "./about.styles";
import ProfileImage from "../../images/about/profile.png";

const AboutPage = () => {
  return (
    <Page>
      <Container>
        <StyledProfile src={ProfileImage} />
        <TextComponent type={TextType.SUBHEADER} text="A little bit about me" />
        <Paragraph text="jsbfiuwberuonoansfjuirouweouanj" />
      </Container>
    </Page>
  );
};

export default AboutPage;
