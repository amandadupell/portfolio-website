import styled from "styled-components";
import { $black } from "../../assets/colors";
import { TextType } from "../../types/text";

interface StoryProps {
  className?: any;
  type?: TextType;
  bold?: boolean;
}

export const StyledText = styled.div<StoryProps>`
  font: ${({ bold }) => (bold ? "700" : "")}
      ${({ type }) => {
        switch (type) {
          case TextType.HEADER:
          case TextType.TITLE:
            return "700 48px/50px";
          case TextType.SUBTITLE:
            return "20px/22px";
          case TextType.PARAGRAPH:
            return "16px/18px";
          default:
            return;
        }
      }}
      Inter,
    sans-serif;
  color: ${$black};
`;
