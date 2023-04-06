import React from "react";
import { Container, StyledCircle, StyledImage } from "./projectImage.styles";

interface ProjectImageProps {
  src: string;
  color: string;
}

const ProjectImage = ({ src, color }: ProjectImageProps) => {
  return (
    <Container>
      <StyledCircle color={color} />
      <StyledImage src={src} />
    </Container>
  );
};

export default ProjectImage;
