import React from "react";
import { Container, StyledCircle, StyledImage } from "./projectImage.styles";

interface ProjectImageProps {
  className?: any;
  src: string;
  alt: string;
  color: string;
}

const ProjectImage = ({ className, src, alt, color }: ProjectImageProps) => {
  return (
    <Container className={className}>
      <StyledCircle color={color} />
      <StyledImage alt={alt} src={src} />
    </Container>
  );
};

export default ProjectImage;
