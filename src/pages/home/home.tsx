import React from "react";
import {
  AnimationSection,
  Page,
  Project,
  TextComponent,
} from "../../components";
import { TextType } from "../../types/text";
import {
  Container,
  ProjectContainer,
  StyledArrow,
  StyledHand,
  StyledTitleBox,
} from "./home.styles";
import Hand from "../../images/home/hand.svg";
import Arrow from "../../images/home/arrow.svg";
import { projectData } from "./constants";

const HomePage = () => {
  return (
    <Page>
      <StyledTitleBox>
        <StyledHand role="presentation" alt="" src={Hand} />
        <TextComponent
          type={TextType.SUBTITLE}
          text="hello! my name is Amanda Dupell and i am"
        />
        <TextComponent
          type={TextType.HEADER}
          text="a brooklyn-based developer and designer with a focus on user experiences"
        />
        <TextComponent
          type={TextType.SUBTITLE}
          text="check out some of my work below!"
        />
        <StyledArrow role="presentation" alt="" src={Arrow} />
      </StyledTitleBox>
      <Container>
        <AnimationSection>
          <TextComponent type={TextType.SUBHEADER} text="projects" />
        </AnimationSection>
        <ProjectContainer>
          {projectData.map((item) => (
            <AnimationSection>
              <Project
                title={item.title}
                description={item.description}
                skills={item.skills}
                src={item.src}
                color={item.color}
                to={item.to}
                target={item.target}
                alt={item.alt}
              />
            </AnimationSection>
          ))}
        </ProjectContainer>
      </Container>
    </Page>
  );
};

export default HomePage;
