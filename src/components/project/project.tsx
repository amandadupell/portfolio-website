import React from "react";
import { Link } from "react-router-dom";
import { ProjectImage, TextComponent } from "../";
import { TextType } from "../../types/text";
import { Container, TextContainer } from "./project.styles";

interface ProjectProps {
  title: string;
  description: string;
  skills: string;
  src: string;
  color: string;
  to: string;
}

const Project = ({
  title,
  description,
  skills,
  src,
  color,
  to,
}: ProjectProps) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      <Container>
        <ProjectImage src={src} color={color} />
        <TextContainer>
          <TextComponent bold type={TextType.SUBTITLE} text={title} />
          <TextComponent type={TextType.PARAGRAPH} text={description} />
          <TextComponent bold type={TextType.PARAGRAPH} text={skills} />
        </TextContainer>
      </Container>
    </Link>
  );
};

export default Project;
