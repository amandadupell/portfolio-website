import React from "react";
import { Container, StyledCircle, StyledImage } from "./projectImage.styles";

interface ProjectImageProps {
  className?: any;
  src: string;
  color: string;
}

const ProjectImage = ({ className, src, color }: ProjectImageProps) => {
  return (
    <Container className={className}>
      <StyledCircle color={color} />
      <StyledImage src={src} />
    </Container>
  );
};

export default ProjectImage;
