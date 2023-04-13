import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import { Container, StyledTitle } from "./paragraph.styles";

interface ParagraphProps {
  className?: any;
  text: string;
  title?: string;
}

const Paragraph = ({ className, text, title }: ParagraphProps) => {
  return (
    <Container className={className}>
      {title && <StyledTitle bold type={TextType.SUBTITLE} text={title} />}
      <TextComponent type={TextType.PARAGRAPH} text={text} />
    </Container>
  );
};

export default Paragraph;
