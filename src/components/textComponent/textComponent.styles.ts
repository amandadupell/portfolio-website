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
  ${({ type }) => (type === TextType.PARAGRAPH ? "width: 300px" : "")}
  ${({ nav }) => (nav ? `&:hover { color: ${$orange} }` : "")}

  @media screen and (max-width: 800px) {
    font: ${({ bold }) => (bold ? "700" : "")}
        ${({ type }) => {
          switch (type) {
            case TextType.HEADER:
            case TextType.TITLE:
              return "700 28px/30px";
            case TextType.SUBTITLE:
              return "16px/18px";
            case TextType.PARAGRAPH:
              return "10px/12px";
            default:
              return;
          }
        }}
        Inter,
      sans-serif;
  }
`;
