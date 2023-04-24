import React from "react";
import { Container, StyledImage } from "./coverImage.styles";

interface CoverImageProps {
  className?: any;
  src: string;
  alt: string;
  color?: string;
}

const CoverImage = ({ className, src, alt, color }: CoverImageProps) => {
  return (
    <Container color={color} className={className}>
      <StyledImage alt={alt} src={src} />
    </Container>
  );
};

export default CoverImage;
