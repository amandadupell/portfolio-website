import React from "react";
import { TextType } from "../../types/text";
import { StyledText } from "./textComponent.styles";

interface TextComponentProps {
  text: string;
  type?: TextType;
  bold?: boolean;
}

const TextComponent = ({ text, type, bold }: TextComponentProps) => {
  return type === TextType.HEADER ? (
    <h1>
      <StyledText type={type} bold={bold}>
        {text}
      </StyledText>
    </h1>
  ) : type === TextType.TITLE ? (
    <h2>
      <StyledText type={type} bold={bold}>
        {text}
      </StyledText>
    </h2>
  ) : (
    <StyledText type={type} bold={bold}>
      {text}
    </StyledText>
  );
};

export default TextComponent;
