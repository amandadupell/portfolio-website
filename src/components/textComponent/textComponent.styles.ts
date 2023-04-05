import styled from "styled-components";
import { $black, $orange } from "../../assets/colors";

export const TYPE = {
  BODY: "body",
  HEADER: "header",
  TITLE: "title",
};

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export interface Props {
  className?: any;
  text: string;
  type: string;
  size: string;
  color?: string;
  bold?: boolean;
  onClick?: void;
  active?: boolean;
}

interface StoryProps {
  className?: any;
  type?: string;
  size?: string;
  bold?: boolean;
  color?: string;
  onClick?: void;
  active?: boolean;
}

export const StyledText = styled.div<StoryProps>`
  font: ${({ type, bold, size }) => {
    let result: string;
    result = bold ? `600` : ``;
    switch (size) {
      case SIZE.SMALL:
        result =
          type === TYPE.TITLE
            ? `${result} 34px/38px`
            : type === TYPE.BODY
            ? `${result} 10px/22px`
            : "";
        break;
      case SIZE.MEDIUM:
        result = type === TYPE.BODY ? `${result} 12px/22px` : "";
        break;
      case SIZE.LARGE:
        result =
          type === TYPE.TITLE
            ? `${result} 46px/50px`
            : TYPE.BODY
            ? `${result} 14px/24px`
            : TYPE.HEADER
            ? `${result} 24px/28px`
            : "";
        break;
      default:
        break;
    }
    return `${result} Roboto, sans-serif !important`;
  }};
  color: ${({ color, active }) => {
    return color ? color : active ? $orange : $black;
  }};
  ${({ onClick }) => {
    return onClick ? `&:hover { color: ${$orange}; cursor: pointer; }` : "";
  }};
`;
