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
            return "700 1.75em";
          case TextType.TITLE:
            return "700 1.25em";
          case TextType.SUBTITLE:
            return "1em";
          case TextType.PARAGRAPH:
            return "0.8em";
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

  @media screen and (max-width: 800px) {
    ${({ type }) =>
      type === TextType.HEADER ? "font: 700 1.25em Inter, sans-serif;" : ""}
  }
`;
