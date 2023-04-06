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
          case TextType.TITLE:
            return "700 48px/52px";
          case TextType.SUBTITLE:
            return "20px/24px";
          case TextType.PARAGRAPH:
            return "16px/20px";
          default:
            return;
        }
      }}
      Inter,
    sans-serif;
  color: ${$black};
  ${({ nav }) => (nav ? `&:hover { color: ${$orange} }` : "")}

  @media screen and (max-width: 800px) {
    font: ${({ bold }) => (bold ? "700" : "")}
        ${({ type }) => {
          switch (type) {
            case TextType.HEADER:
            case TextType.TITLE:
              return "700 28px/32px";
            case TextType.SUBTITLE:
              return "16px/20px";
            case TextType.PARAGRAPH:
              return "10px/14px";
            default:
              return;
          }
        }}
        Inter,
      sans-serif;
  }
`;
