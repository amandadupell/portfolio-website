import React from "react";
import { Page, Project, TextComponent } from "../../components";
import { TextType } from "../../types/text";
import {
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
        <StyledHand src={Hand} />
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
        <StyledArrow src={Arrow} />
      </StyledTitleBox>
      <ProjectContainer>
        <TextComponent type={TextType.SUBHEADER} text="projects" />
        {projectData.map((item) => (
          <Project
            title={item.title}
            description={item.description}
            skills={item.skills}
            src={item.src}
            color={item.color}
            to={item.to}
            target={item.target}
          />
        ))}
      </ProjectContainer>
    </Page>
  );
};

export default HomePage;
