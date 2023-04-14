import React from "react";
import { TextType } from "../../types/text";
import { StyledText } from "./textComponent.styles";

interface TextComponentProps {
  className?: any;
  text: string;
  type?: TextType;
  bold?: boolean;
  nav?: boolean;
}

const TextComponent = ({
  className,
  nav,
  text,
  type,
  bold,
}: TextComponentProps) => {
  return type === TextType.HEADER ? (
    <h1>
      <StyledText className={className} nav={nav} type={type} bold={bold}>
        {text}
      </StyledText>
    </h1>
  ) : type === TextType.SUBHEADER ? (
    <h2>
      <StyledText className={className} nav={nav} type={type} bold={bold}>
        {text}
      </StyledText>
    </h2>
  ) : (
    <StyledText className={className} nav={nav} type={type} bold={bold}>
      {text}
    </StyledText>
  );
};

export default TextComponent;
