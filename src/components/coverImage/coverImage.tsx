import React from "react";
import { Container, StyledImage } from "./coverImage.styles";

interface CoverImageProps {
  className?: any;
  src: string;
  color?: string;
}

const CoverImage = ({ className, src, color }: CoverImageProps) => {
  return (
    <Container color={color} className={className}>
      <StyledImage src={src} />
    </Container>
  );
};

export default CoverImage;
