import styled from "styled-components";
import { $black, $orange } from "../../assets/colors";
import { TextType } from "../../types/text";

interface StyledTextProps {
  className?: any;
  type?: TextType;
  bold?: boolean;
  nav?: boolean;
}

export const StyledText = styled.div<StyledTextProps>`
  font: ${({ bold }) => (bold ? "700 " : "")}
      ${({ type }) => {
        switch (type) {
          case TextType.HEADER:
          case TextType.SUBHEADER:
            return "700 2em";
          case TextType.TITLE:
            return "700 1.5em";
          case TextType.SUBTITLE:
            return "1.25em";
          case TextType.PARAGRAPH:
            return "1em";
          default:
            return;
        }
      }}
      Inter,
    sans-serif;
  color: ${$black};
  ${({ type }) =>
    type === TextType.HEADER || type === TextType.SUBHEADER
      ? `width: 80%;`
      : ""}
  ${({ nav }) => (nav ? `&:hover { color: ${$orange} }` : "")}
  white-space: pre-line;
`;
