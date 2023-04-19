import styled from "styled-components";
import { TextComponent } from "..";

interface StyledParagraphProps {
  size?: string;
}

export const Container = styled.div<StyledParagraphProps>`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => (size === "large" ? "40%" : "250px")};

  @media screen and (max-width: 1000px) {
    margin-bottom: 25px;
    width: 100%;
  }
`;

export const StyledTitle = styled(TextComponent)`
  margin-bottom: 20px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 5px;
  }
`;
