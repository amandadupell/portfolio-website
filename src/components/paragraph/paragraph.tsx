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
  link?: string;
  linkText?: string;
}

const Paragraph = ({
  className,
  header,
  size,
  text,
  title,
  link,
  linkText,
}: ParagraphProps) => {
  return (
    <Container size={size} className={className}>
      {header && <StyledTitle type={TextType.SUBHEADER} text={header} />}
      {title && <StyledTitle bold type={TextType.SUBTITLE} text={title} />}
      <StyledTitle type={TextType.PARAGRAPH} text={text} />
      {link && (
        <a aria-label={linkText} href={link} target="_blank" rel="noreferrer">
          <TextComponent type={TextType.PARAGRAPH} text={linkText} />
        </a>
      )}
    </Container>
  );
};

export default Paragraph;
