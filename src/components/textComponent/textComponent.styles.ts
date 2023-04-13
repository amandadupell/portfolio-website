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
  font: ${({ bold }) => (bold ? "700" : "")}
      ${({ type }) => {
        switch (type) {
          case TextType.HEADER:
          case TextType.SUBHEADER:
            return "700 48px/54px";
          case TextType.TITLE:
            return "700 26px/32px";
          case TextType.SUBTITLE:
            return "20px/26px";
          case TextType.PARAGRAPH:
            return "16px/22px";
          default:
            return;
        }
      }}
      Inter,
    sans-serif;
  color: ${$black};
  ${({ type }) => (type === TextType.HEADER ? `width: 80%;` : "")}
  ${({ nav }) => (nav ? `&:hover { color: ${$orange} }` : "")}
  white-space: pre-line;

  @media screen and (max-width: 800px) {
    font: ${({ bold }) => (bold ? "700" : "")}
        ${({ type }) => {
          switch (type) {
            case TextType.HEADER:
            case TextType.SUBHEADER:
              return "700 28px/34px";
            case TextType.TITLE:
              return "700 20px/26px";
            case TextType.SUBTITLE:
              return "16px/22px";
            case TextType.PARAGRAPH:
              return "10px/16px";
            default:
              return;
          }
        }}
        Inter,
      sans-serif;
  }
`;
