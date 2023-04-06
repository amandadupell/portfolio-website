import React from "react";
import { TextType } from "../../types/text";
import { StyledText } from "./textComponent.styles";

interface TextComponentProps {
  text: string;
  type?: TextType;
  bold?: boolean;
  nav?: boolean;
}

const TextComponent = ({ nav, text, type, bold }: TextComponentProps) => {
  return type === TextType.HEADER ? (
    <h1>
      <StyledText nav={nav} type={type} bold={bold}>
        {text}
      </StyledText>
    </h1>
  ) : type === TextType.SUBHEADER ? (
    <h2>
      <StyledText nav={nav} type={type} bold={bold}>
        {text}
      </StyledText>
    </h2>
  ) : (
    <StyledText nav={nav} type={type} bold={bold}>
      {text}
    </StyledText>
  );
};

export default TextComponent;
