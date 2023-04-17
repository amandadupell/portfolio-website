import React from "react";
import { TextComponent } from "..";
import { TextType } from "../../types/text";
import { Container, StyledTitle } from "./paragraph.styles";

interface ParagraphProps {
  className?: any;
  header?: string;
  size?: string;
  text: string;
  title?: string;
}

const Paragraph = ({
  className,
  header,
  size,
  text,
  title,
}: ParagraphProps) => {
  return (
    <Container size={size} className={className}>
      {header && <StyledTitle type={TextType.SUBHEADER} text={header} />}
      {title && <StyledTitle bold type={TextType.SUBTITLE} text={title} />}
      <TextComponent type={TextType.PARAGRAPH} text={text} />
    </Container>
  );
};

export default Paragraph;
