import React from "react";
import { Page, Paragraph } from "../../components";
import { Container, StyledProfile } from "./about.styles";
import ProfileImage from "../../images/about/profile.png";
import { info } from "./constants";

const AboutPage = () => {
  return (
    <Page>
      <Container>
        <StyledProfile src={ProfileImage} />
        <Paragraph
          size="large"
          header="A little bit about me"
          text={info.text}
        />
      </Container>
    </Page>
  );
};

export default AboutPage;
